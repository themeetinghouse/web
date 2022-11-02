import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import * as queries from '../../themeetinghousetmhShared/lib/nodejs/queries';
import TMHStripe from '../../themeetinghousetmhShared/lib/nodejs/TMHStripe';

function uniqBy(a, key) {
  return [...new Map(a.map((x) => [key(x), x])).values()];
}
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
async function Execute(event) {
  try {
    console.log('Logged in');
    const allGroupsFromF1 = [];
    const locationsLoaded = [];
    const groupTypes = await TMHDB.f1ListGroupTypes();
    await asyncForEach(groupTypes, async (groupTypeItem) => {
      const f1LocationId = groupTypeItem.id;
      const listGroupsResponse =
        await TMHDB.getRetryableGraphQLOperationPromise(
          queries.f1ListGroups,
          { itemId: f1LocationId },
          5
        );
      var openGroupsForLocation;
      if (
        listGroupsResponse.data.F1ListGroups.groups &&
        listGroupsResponse.data.F1ListGroups.groups.group
      )
        openGroupsForLocation =
          listGroupsResponse.data.F1ListGroups.groups.group.filter(
            (item) => item.isOpen == 'true' && item.isSearchable == 'true'
          );
      else openGroupsForLocation = [];

      const groupIdsForLocation = openGroupsForLocation.map((g) => g.id);
      const listTimezonesResponse =
        await TMHDB.getRetryableGraphQLOperationPromise(
          queries.f1ListTimezones,
          { itemId: groupIdsForLocation },
          5
        );
      for (const group of openGroupsForLocation) {
        var timeZones;
        if (listTimezonesResponse.data.F1ListTimezones)
          timeZones = listTimezonesResponse.data.F1ListTimezones.find(
            (s) => s.id == group.id
          );
        else timeZones = [];
        const timeZone = timeZones.info.group.timeZone;
        if (timeZone) {
          group.timeZone = timeZone;
        }
      }

      const eventIdsForLocation = openGroupsForLocation.map((g) => g.event.id);
      if (eventIdsForLocation) {
        // Get the schedules for the home churches in this location

        const listEventSchedulesResponse =
          await TMHDB.getRetryableGraphQLOperationPromise(
            queries.f1ListEventSchedules,
            { itemId: eventIdsForLocation },
            5
          );
        //console.log("HomeChurchItem.constructor(): eventScheduleResponse = %o", listEventSchedulesResponse);
        for (const group of openGroupsForLocation) {
          var eventSchedule;
          if (listEventSchedulesResponse.data.F1ListEventSchedules)
            eventSchedule =
              listEventSchedulesResponse.data.F1ListEventSchedules.find(
                (s) => s.id == group.event.id
              );
          else eventSchedule = [];
          const schedules = eventSchedule.event.schedules.schedule;
          if (schedules) {
            group.schedule = schedules[0];
          }
        }
        allGroupsFromF1.push(...openGroupsForLocation);
        if (f1LocationId) {
          locationsLoaded.push(f1LocationId);
        }
      }
    });
    const allGroupsFromDynamo = await TMHDB.getAllGroups(null);
    const allGroupsFromDynamoUniq = uniqBy(allGroupsFromDynamo, (x) => x.id);
    const allGroupsFromF1Uniq = uniqBy(allGroupsFromF1, (x) => x.id);

    let update = allGroupsFromF1Uniq.filter((x: any) =>
      allGroupsFromDynamoUniq.map((y: any) => y.id).includes(x.id)
    );
    let add = allGroupsFromF1Uniq.filter(
      (x: any) => !allGroupsFromDynamoUniq.map((y: any) => y.id).includes(x.id)
    );
    let deleteIt = allGroupsFromDynamoUniq.filter(
      (x: any) => !allGroupsFromF1Uniq.map((y: any) => y.id).includes(x.id)
    );
    console.log('Add Groups');
    await asyncForEach(add, async (item) => {
      await TMHDB.addGroup(item);
    });
    console.log('Update Groups');
    await asyncForEach(update, async (item) => {
      await TMHDB.updateGroup(item);
    });
    console.log('Delete Groups');
    await asyncForEach(deleteIt, async (item) => {
      await TMHDB.deleteGroup(item);
    });
  } catch (e) {
    console.log({ 'Login Error': e });
  }
}

export const handler = async (event) => {
  await Execute(event);
  return Promise.resolve('Successfully processed DynamoDB record');
};
