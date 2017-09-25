/* global it, describe, beforeEach, before */
// During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //

const server = require('../src/server/index'); // mongoose model
const Mobile = require('../src/server/mobile.model'); // ' '  which lets us talk with mongoDB

const chai = require('chai');
chai.should();
chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));

// create agent for tests
const agent = chai.request.agent(server); // agent is how we handle all http request

// Our parent block    // parent block encapsulates all data / tests
describe('Mobiles', () => {
  // we are decribing our set of tests, 2nd parameter to describe is the function we want to run  before EACH test we specify below
  /*
     * Test the /GET route
     */
  describe('/GET mobiles', () => {
    // nested describe function, we are describing what the test is .  //describe takes a call back function starting on the next line
    it('should GET all the mobiles', done => {
      // 'it' = is a "unit test" - testing individual testing of code "it should GET all the hackers", and run said function  // it takes a call back
      agent
        .get('/api/mobiles') // the api we are seding it to
        .end((err, res) => {
          // .end is 'chai http' request , takes call back 'err', and the res from our call back
          if (err) {
            return done(err); // return error if done.
          }
          res.should.have.status(200); // resposne should have the following ...
          // res.body.items.length.should.be.eql(0)
          done();
        });
    });
  });

  /*
     * Test the /POST route
     */
  describe('/POST 1000 documents', () => {
    // describing the test
    it('should POST a 1000 docs', done => {
      // 'it' is call back OR takes a call back ??
      const mobile = {
        name: 'zero cool' // where we would place all required fields of our original schema. // creating a user/hacker
      };
      agent
        .post('/api/mobiles')
        .send(mobile)
        .end((err, res) => {
          if (err) {
            return done(err); // always handle error.
          }
          res.should.have.status(200);
          // res.should.have.header('location');
          res.body.should.be.a('object');
          res.body.should.have.property('item'); // this is where we look for specific item values.
          // res.body.should.have.deep.property('item.name', 'zero cool'); // how you look for a deep property w/in the object we get back from our HTTP method
          // res.body.should.have.property('item').that.has.property('zero cool') // different of way stepping thorough.
          done();
        });
    });
  });
});
