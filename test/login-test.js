const app = require('../app');
const userModel = require('../model/user');
const mongoose = require('mongoose');
const supertest = require('supertest');
let server;

describe('My Test Suite', () => {
  beforeAll(async (done) => {
    console.log('beforeAll... ');
    server = app.listen(4000, () => {
      global.agent = supertest.agent(app);
    });
    console.log(mongoose.connection.readyState);
    userModel.deleteMany({}, (err) => {
      console.log(err);
    });
    done();
  });

  afterAll(async (done) => {
    console.log('afterAll... ');  
    server.close();
    done();
  });

  describe('Test Failure Suite', () => {
      test('login returns 500', async (done) => {
        const response = await supertest(server).post('/login/signInForm').send({
        });
        expect(response.status).toBe(500);
        done();
  });
});

describe('Test Pass Suite', () => {
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
    expect(response.status).toBe(200);
    done();
  });
});
});