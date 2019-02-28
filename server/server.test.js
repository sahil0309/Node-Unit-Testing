const request = require('supertest');
const app = require('./server').app;
var sinon = require('sinon');
const db = require('../db/db');


// Sinon :- https://solidgeargroup.com/unit-tests-javascript-sinon

describe('Testing Server File', () => {

    beforeEach(()=>{
        this.dbMock=sinon.stub(db,'save').rejects('Error');
    })
    it('Should return hello world response', (done) => {
        const call = request(app).get('/');
        call.expect('Error').expect(400);
        done();
        // request(app).get('/');

    })
})