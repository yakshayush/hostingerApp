const app = require('../app');
const mongoose = require("mongoose");
const doctorModel = require('../model/doctor')
const doctor = require('../api/routes/doctor');
const request = require('supertest');
const dbHandler = require('./db-handler');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    await dbHandler.connect();
    server = app.listen(3003, () => {
        global.agent = request.agent(app);
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


describe('Successful Test Suite', () => {
    test('creates doctor profile successfully', async (done) => {
        const res = await request(app).post('/doctor/registerDoctor').type('json').send({
            name: 'ooopp',
            lastname:'opop',
            password: 'password',
            specialization: 'profile',
            consultationCharge: 110,
            email: 'opop@gmail.com',
            phone: 90909090,
            onlineConsultation: true,
            authType: 'registered' 
        });
        expect(res.statusCode).toBe(200);
        done();
    });
});