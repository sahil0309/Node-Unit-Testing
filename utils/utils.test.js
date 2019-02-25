const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(10, 20);
    // if(res!==30){
    //     throw new Error(`Excepted 30 but got ${res}`);
    // }
    expect(res).toBe(30).toBeA('number');
})

it('should async add two numbers', (done) => {
    utils.asyncAdd(10,20,(err,sum)=>{
        if(err)
        {
           expect(err).toBe('Failure Hogyan Bawa');
           done();
        }
        else{
            expect(sum).toBe(30);
            done();
        }
       
    })

})

it('should square the number', () => {
    var res = utils.square(10);
})

it('should expect some value', () => {
    //  expect(12).toNotBe(13);
    //  expect({name:'Sahil'}).toBe({name:'Sahil'}); //to Be Use === to check for equality
    expect({ name: 'Sahil' }).toEqual({ name: 'Sahil' });
    expect([1, 2, 3]).toInclude(2);
    expect({
        name: 'Sahil',
        age: '23',
        location: 'mumbai'
    }).toInclude({
        name: 'Sahil'
    })
})

it('Should verify setName is working', () => {
    // To Prove Objects are Passed by value
    var user = { location: 'Mumbai', age: 23 };
    var res = utils.setName(user, 'Sahil Arora');
    expect(res).toBe(user);
})