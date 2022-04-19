import TMHDB from '../../themeetinghousetmhShared/lib/nodejs/TMHDB';
import * as queries from '../../themeetinghousetmhShared/lib/nodejs/queries';

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
    const allGroupsFromF1 = [];
    const locationsLoaded = [];
    const groupTypes = await TMHDB.f1ListAllActivities();
    console.log({ ActivityCount: groupTypes.length });
    await asyncForEach(groupTypes, async (groupTypeItem) => {
      const f1LocationId = groupTypeItem.id;
      var page = 0;
      while (true) {
        page = page + 1;
        const listGroupsResponse =
          await TMHDB.getRetryableGraphQLOperationPromise(
            queries.f1ListAssignments,
            { itemId: f1LocationId, page: page.toString() },
            5
          );
        if (listGroupsResponse.data.F1ListAssignments.length == 0) break;
        var openGroupsForLocation;
        if (listGroupsResponse.data.F1ListAssignments)
          openGroupsForLocation = listGroupsResponse.data.F1ListAssignments;
        else openGroupsForLocation = [];

        allGroupsFromF1.push(...openGroupsForLocation);
      }
    });
    const allGroupsFromDynamo = await TMHDB.getAllAssignments(null);
    const allGroupsFromDynamoUniq = uniqBy(allGroupsFromDynamo, (x) => x.id);
    const allGroupsFromF1Uniq = uniqBy(allGroupsFromF1, (x) => x.id);
    console.log({
      allGroupsFromF1: allGroupsFromF1.length,
      allGroupsFromDynamo: allGroupsFromDynamo.length,
      allGroupsFromDynamoUniq: allGroupsFromDynamoUniq.length,
      allGroupsFromF1Uniq: allGroupsFromF1Uniq.length,
    });

    let update = allGroupsFromF1Uniq.filter((x: any) =>
      allGroupsFromDynamoUniq.map((y: any) => y.id).includes(x.id)
    );
    let add = allGroupsFromF1Uniq.filter(
      (x: any) => !allGroupsFromDynamoUniq.map((y: any) => y.id).includes(x.id)
    );
    let deleteIt = allGroupsFromDynamoUniq.filter(
      (x: any) => !allGroupsFromF1Uniq.map((y: any) => y.id).includes(x.id)
    );
    console.log({
      add: add.length,
      update: update.length,
      delete: deleteIt.length,
    });
    console.log('Add Groups');
    await asyncForEach(add, async (item) => {
      await TMHDB.addGroupAssignment(item);
    });
    console.log('Update Groups');
    await asyncForEach(update, async (item) => {
      await TMHDB.updateGroupAssignment(item);
    });
    console.log('Delete Groups');
    await asyncForEach(deleteIt, async (item) => {
      await TMHDB.deleteGroupAssignment(item);
    });
  } catch (e) {
    console.log({ 'Login Error': e });
  }
}

exports.handler = async (event) => {
  await Execute(event);
  return Promise.resolve('Successfully processed DynamoDB record');
};
