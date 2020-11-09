/* Amplify Params - DO NOT EDIT
	API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIIDOUTPUT
	API_THEMEETINGHOUSE_GRAPHQLAPIKEYOUTPUT
	ENV
	FUNCTION_GETBIBLEPASSAGE_NAME
	REGION
Amplify Params - DO NOT EDIT */
'use strict';

global.crypto = require('crypto')
const Amplify = require('aws-amplify');
global.fetch = require("node-fetch");
const queries = require('./queries')
const mutations = require('./mutations')
const apiKey = "da2-6zfuocqmhvecrfkng7hx2oipni"

Amplify.default.configure({
  aws_appsync_graphqlEndpoint: process.env.API_THEMEETINGHOUSE_GRAPHQLAPIENDPOINTOUTPUT,
  aws_appsync_region: process.env.region,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_appsync_apiKey:apiKey,
  Auth: {
    mandatorySignIn: false,
    region: process.env.region,
    userPoolId: process.env.userPoolId,
    identityPoolRegion: process.env.region,
    userPoolWebClientId: process.env.userPoolWebClientId,
    identityPoolId: process.env.identityPoolId,
    apiKey:apiKey

  }
})

async function f1ListGroupTypes() {
  try {
    console.log("Starting groupMemberByGroup")
    const json = await Amplify.API.graphql({
      query: queries.f1ListGroupTypes,
      
      authMode: 'API_KEY'
    });
    console.log("Done Get f1ListGroupTypes")
    var result
    if (json.data.F1ListGroupTypes.groupTypes.groupType)
      result=json.data.F1ListGroupTypes.groupTypes.groupType.filter((item) => item.isWebEnabled == 'true')
    else 
      result=[]
    return result
  }
  catch (json) {
    console.log({ "Error getting recipients": json.errors })
    var result
    if (json.data.F1ListGroupTypes.groupTypes.groupType)
      result=json.data.F1ListGroupTypes.groupTypes.groupType.filter((item) => item.isWebEnabled == 'true')
    else 
      result=[]
    return result
    
  }
}

async function addGroup(item){
  try {
    const json = await Amplify.API.graphql({
      query: mutations.createF1ListGroup2,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: {input:item}
    });
  }
  catch (json) {
    console.log(item)
    console.log(json)
    console.log({ "Error getting addGroup": json.errors })
    console.log({ "Error getting addGroup": json.errors[0].path })
    console.log({ "Error getting addGroup": json.errors[0].locations })
  }
}
async function updateGroup(item){
  try {
    const json = await Amplify.API.graphql({
      query: mutations.updateF1ListGroup2,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: {input:item}
    });
  }
  catch (json) {
    console.log({ "Error getting updateGroup": json.errors })
    console.log(json)
  }
}
async function deleteGroup(item){
  try {
    const json = await Amplify.API.graphql({
      query: mutations.deleteF1ListGroup2,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: {id:item}
    });
  }
  catch (json) {
    console.log({ "Error getting deleteGroup": json.errors })
    console.log(json)
  }
}

async function getAllGroups(nextToken){
  try {
    console.log("Starting getAllGroups")
    const json = await Amplify.API.graphql({
      query: queries.listF1ListGroup2s,
      variables: {
        nextToken: nextToken
      },
      authMode: 'API_KEY'
    });
    console.log("Done Get listF1ListGroup2s")
    console.log(json)
    if (json.data.listF1ListGroup2s.nextToken!=null)
      return [...json.data.listF1ListGroup2s.items,...await getAllGroups(json.data.listF1ListGroup2s.nextToken)]
    else
      return json.data.listF1ListGroup2s.items
  }
  catch (json) {
    console.log({ "Error getting recipients": json.errors })
    console.log(json)
    if (json.data.listF1ListGroup2s.nextToken!=null)
      return [...json.data.listF1ListGroup2s.items,...await getAllGroups(json.data.listF1ListGroup2s.nextToken)]
    else
      return json.data.listF1ListGroup2s.items
  }
}
 async function getRetryableGraphQLOperationPromise(query, args, retry)
 {
    if (args.itemId.length == 0)
      return Promise.resolve(null);
    if (!retry) 
      retry = 5;
    const qry = Amplify.API.graphql({
      query:query, 
      variables:args,
      authMode: 'API_KEY'
    })

    try {
      return await qry;
    } catch (error) {
      console.log('Promise failure caught: %o', error);
      if (retry > 0) {
        console.log(retry);
        return getRetryableGraphQLOperationPromise(query, args, --retry);
      } else return Promise.resolve(null);
    }
  }
  function uniqBy(a, key) {
    return [
        ...new Map(
            a.map(x => [key(x), x])
        ).values()
    ]
}
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
async function Execute(event) {
    try {
          await Amplify.Auth.signIn("george_vic_bell@hotmail.com", "")
          const currentSession = await Amplify.Auth.currentSession()
          Amplify.default.configure({
            Authorization: currentSession.getIdToken().getJwtToken(),
          })
          console.log("Logged in")
          const allGroupsFromF1 = [];
          const locationsLoaded = [];
          const groupTypes=await f1ListGroupTypes()
          await asyncForEach(groupTypes, async (groupTypeItem) => {

            const f1LocationId = groupTypeItem.id;
            const listGroupsResponse = await getRetryableGraphQLOperationPromise(queries.f1ListGroups, { itemId: f1LocationId },5)
            var openGroupsForLocation
            if (listGroupsResponse.data.F1ListGroups.groups.group)
               openGroupsForLocation = (listGroupsResponse.data.F1ListGroups.groups.group).filter((item)  =>item.isOpen == 'true' && item.isSearchable == 'true');
            else
               openGroupsForLocation=[]
            const eventIdsForLocation = openGroupsForLocation.map((g) => g.event.id );
            if (eventIdsForLocation)
            {
                  // Get the schedules for the home churches in this location
                  const listEventSchedulesResponse=await getRetryableGraphQLOperationPromise(queries.f1ListEventSchedules, {itemId: eventIdsForLocation,})
                    //console.log("HomeChurchItem.constructor(): eventScheduleResponse = %o", listEventSchedulesResponse);
                  for (const group of openGroupsForLocation) {
                    var eventSchedule
                    if ( listEventSchedulesResponse.data.F1ListEventSchedules )
                       eventSchedule = (listEventSchedulesResponse.data.F1ListEventSchedules ).find((s) => s.id == group.event.id);
                    else
                      eventSchedule=[]
                    const schedules =eventSchedule.event.schedules.schedule;
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
          const allGroupsFromDynamo=await getAllGroups(null)
          const allGroupsFromDynamoUniq = uniqBy(allGroupsFromDynamo,x=>x.id);
          const allGroupsFromF1Uniq = uniqBy(allGroupsFromF1,x=>x.id);

          let update = allGroupsFromF1Uniq.filter(x => allGroupsFromDynamoUniq.map(y=>y.id).includes(x.id));
          let add = allGroupsFromF1Uniq.filter(x => !allGroupsFromDynamoUniq.map(y=>y.id).includes(x.id));
          let deleteIt = allGroupsFromDynamoUniq.filter(x => !allGroupsFromF1Uniq.map(y=>y.id).includes(x.id));

          console.log("Add Groups")
          await asyncForEach(add,async (item)=>{
            await addGroup(item)
          })
          console.log("Update Groups")
          await asyncForEach(update,async (item)=>{
            await updateGroup(item)
          })
          console.log("Delete Groups")
          await asyncForEach(deleteIt,async (item)=>{
            await deleteGroup(item)
          })

  }
  catch (e) {
    console.log({ "Login Error": e })
  }
}

 
exports.handler = async (event) => {
    await Execute(event)
    return Promise.resolve('Successfully processed DynamoDB record');
};
