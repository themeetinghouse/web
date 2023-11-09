/* eslint-disable */
/*
 * Copyright 2019-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const {
  addUserToGroup,
  removeUserFromGroup,
  confirmUserSignUp,
  disableUser,
  enableUser,
  getUser,
  listUsers,
  listGroups,
  listGroupsForUser,
  listUsersInGroup,
  signUserOut,
} = require('./cognitoActions');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Only perform tasks if the user is in a specific group
const allowedGroup = process.env.GROUP;

const checkGroup = function (req, res, next) {
  if (req.path == '/signUserOut') {
    return next();
  }

  if (typeof allowedGroup === 'undefined' || allowedGroup === 'NONE') {
    return next();
  }

  // Fail if group enforcement is being used
  if (req.apiGateway.event.requestContext.authorizer.claims['cognito:groups']) {
    const groups =
      req.apiGateway.event.requestContext.authorizer.claims[
        'cognito:groups'
      ].split(',');
    if (!(allowedGroup && groups.indexOf(allowedGroup) > -1)) {
      const err = new Error(
        `User does not have permissions to perform administrative tasks`
      );
      next(err);
    }
  } else {
    const err = new Error(
      `User does not have permissions to perform administrative tasks`
    );
    err.statusCode = 403;
    next(err);
  }
  next();
};

app.all('*', checkGroup);

app.post('/addUserToGroup', async (req, res, next) => {
  if (!req.body.username || !req.body.groupname) {
    const err = new Error('username and groupname are required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await addUserToGroup(
      req.body.username,
      req.body.groupname
    );
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.post('/removeUserFromGroup', async (req, res, next) => {
  if (!req.body.username || !req.body.groupname) {
    const err = new Error('username and groupname are required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await removeUserFromGroup(
      req.body.username,
      req.body.groupname
    );
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.post('/confirmUserSignUp', async (req, res, next) => {
  if (!req.body.username) {
    const err = new Error('username is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await confirmUserSignUp(req.body.username);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.post('/disableUser', async (req, res, next) => {
  if (!req.body.username) {
    const err = new Error('username is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await disableUser(req.body.username);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.post('/enableUser', async (req, res, next) => {
  if (!req.body.username) {
    const err = new Error('username is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await enableUser(req.body.username);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.get('/getUser', async (req, res, next) => {
  if (!req.query.username) {
    const err = new Error('username is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await getUser(req.query.username);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.get('/listUsers', async (req, res, next) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 25;
    const token = req.query.token || null;
    const filter = req.query.filter || null;

    const response = await listUsers(limit, token, filter);
    res.status(200).json(response);
  } catch (err) {
    console.error('Error in /listUsers:', err);
    next(err);
  }
});

app.get('/listGroups', async (req, res, next) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 25;
    const token = req.query.token;

    const response = await listGroups(limit, token);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.get('/listGroupsForUser', async (req, res, next) => {
  if (!req.query.username) {
    const err = new Error('username is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 25;
    const token = req.query.token;

    const response = await listGroupsForUser(req.query.username, limit, token);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.get('/listUsersInGroup', async (req, res, next) => {
  if (!req.query.groupname) {
    const err = new Error('groupname is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 25;
    const token = req.query.token;

    const response = await listUsersInGroup(req.query.groupname, limit, token);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

app.post('/signUserOut', async (req, res, next) => {
  const { username } = req.body;
  const claimsUsername =
    req.apiGateway.event.requestContext.authorizer.claims.username;
  const userArnUsername = /[^/]*$/.exec(
    req.apiGateway.event.requestContext.identity.userArn
  )[0];

  if (username !== claimsUsername && username !== userArnUsername) {
    const err = new Error('only the user can sign themselves out');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await signUserOut(username);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

// Error middleware must be defined last
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).json({ message: err.message }).end();
});

app.listen(3000, () => {
  console.log('App started');
});

module.exports = app;
