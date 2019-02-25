const request = require('supertest');
const app =require('./server').app;

it('Should return hello world response',(done)=>{
    request(app).get('/').expect('Hello World').expect(200).end(done);
})