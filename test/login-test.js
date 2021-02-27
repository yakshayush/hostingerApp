const app = require('../app');
const mongoose = require('mongoose');
const userModel = mongoose.model('User');
const supertest = require('supertest');
const dbHandler = require('./db-handler');
let server;
let userId;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  await dbHandler.connect();
  server = app.listen(3003, () => {
      global.agent = supertest.agent(app);
  });
  console.log(mongoose.connection.readyState);
});

/**
* Remove and close the db and server.
*/
afterAll(async () => {
  await dbHandler.clearDatabase();
  await dbHandler.closeDatabase();
  await server.close();
});

describe('Login Test Suite', () => {

  describe('Test login Failure Suite', () => {
      test('login returns 500', async (done) => {
        const response = await supertest(server).post('/login/signInForm').send({
        });
        expect(response.status).toBe(500);
        done();
  });
});

describe('Test login Pass', () => {
test('login returns 200', async (done) => {
    const response = await supertest(server).post('/login/signInForm').type('json').send({
      name: 'ooopp',
      lastname:'opop',
      password: 'password',
      profile: 'profile',
      email: 'opop@gmail.com',
      phone: 90909090,
      DOB: '12-01-1999',
      authType: 'registered'
    });
    userId = response.body._id;
    expect(response.body._id).toBeTruthy;
    expect(response.status).toBe(200);
    done();
  });
});

describe('Fetch User Suite', () => {
  test('Fetch User returns 200', async (done) => {
      console.log('userId', userId);
      await supertest(server).get('/user/' + userId).then(response => {
        expect(response.body).toBeTruthy;
        expect(response.status).toBe(200);
        const jsonResponse = JSON.parse(response.text);
        expect(jsonResponse.user._id).toEqual(userId);
      });
      done();
      });
  });
});
