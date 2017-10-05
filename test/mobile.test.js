const server = require('../src/server');
const request = require('supertest');
const mobileModel = require('../src/server/models/mobile.model');
const chai = require('chai');

chai.should();
chai.use(require('chai-http'));

const agent = chai.request.agent(server);


// describe('Mobiles', function () {
//   beforeEach(function (done) {
//     mobileModel.remove({}), (err, data) => {
//       console.log('data', data)
//       if (err) {
//         return done(err)
//       }
//       done()
//     }
//   })
describe('#GET / mobile', () => {
  it('should get all mobiles', (done) => {
    agent.get('/mobile')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        res.should.have.status(200);
        done()
      });
  });
});

describe('#POST / mobile', () => {
  it('should POST all mobile', (done) => {
    const mobileObj = {
      firstName: 'John',
      middleName: 'C',
      lastName: 'Yu',
      suffix: 'JCY',
      addressOne: '123 Fake Street',
      addressTwo: '#711',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90007',
      phone: '617-123-4567',
      debit: '4444555566667777',
      creditCard: 'VISA',
      donationAmt: '100',
      dateOfDonation: '09/14/17',
      multiDonation: 'Muti-donation',
      venue: 'Fenway',
      venueCity: 'Boston',
      venueState: 'MA',
      dateOfEvent: '09/14/17',
      timeOfEvent: '17:00',
      artistEvent: 'Red Sox Game',
      seatGrab: '35D',
      prizeOne: 'Amazon Gift Card',
      priceTwo: 'Walmart Gift Card',
      raffle50: 'Raffle',
      reelOne: 'Reel 1',
      reelTwo: 'Reel 2',
      keyCode: '12345678',
      vet: 'NO',
      vetRelated: 'NO',
      thermometer: 'false',
      noThermometer: 'true',
      announcer: 'false',
      noAnnouncer: 'true',
      email: 'john@crs-consulting.com',
      raffle: 'Apple iPhone',
      raffleFee: '1',
      sweeps: 'Apple Computer',
      sweepsFee: '1',
    };
    const data = [];
    for (let i = 0; i < 1000; i++) {
      const mobile = new Mobile(mobileObj);
      data.push(mobile);
    }
    agent.post('/mobile')
      .send(data)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.habe.property('firstName')
        done()
      });
  });
});
// })

// [ 1, 2, 3 ].forEach(value => {
//   it(`should return ${ value }+1`, () => {
//     expect(add(value)).to.be.eql(value + 1);
//   })
// });

// // The same, but for older versions of Node.js/browser:
// [ 1, 2, 3 ].forEach(function(value) {
//   it('should return ' + value + '+1', function() {
//     expect(add(value)).to.be.eql(value + 1);
//   })
// });


// function makeTest(p) {
//   it(p.describe, function(done) {
//       request(url)
//           .post('/user/signin')
//           .send(p.body)
//           .expect(p.status)
//           .expect(function(res) {
//               assert.equal(res.body.code, p.status);
//               assert.equal(res.body.message, p.message);
//           })
//           .end(done);
//   });
// }

// for (var i in provider) {
//   makeTest(provider[i]);
// }

// var expect = require('chai').expect;
// var arr    = [];

// describe('Array test', function() {

//   before(function(done){
//     setTimeout(function(){
//       for (var i = 0; i < 5; i++){
//         arr.push(Math.floor(Math.random() * 10));
//       }
//       done();
//     }, 1000);
//   });

//   it('dummy', function(done) {
//     describe('Testing elements', function() {
//       arr.forEach(function(el) {
//         it('testing' + el, function(done) {
//           expect(el).to.be.a('number');
//           done();
//         });
//       });
//     });
//     done();
//   });

// });
