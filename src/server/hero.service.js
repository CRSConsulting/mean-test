const Hero = require('./hero.model');
const Mobile = require('./mobile.model');
const ReadPreference = require('mongodb').ReadPreference;
const mobileObj = require('./data');
require('./mongo').connect();

function getHeroes(req, res) {
  const docquery = Hero.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(heroes => {
      res.status(200).json(heroes);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postHero(req, res) {
  const originalHero = {
    id: req.body.id,
    name: req.body.name,
    saying: req.body.saying
  };
  const hero = new Hero(originalHero);
  hero.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(hero);
    console.log('Hero created successfully!');
  });
}

function putHero(req, res) {
  const originalHero = {
    id: parseInt(req.params.id, 10),
    name: req.body.name,
    saying: req.body.saying
  };
  Hero.findOne({
    id: originalHero.id
  }, (error, hero) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, hero)) return;

    hero.name = originalHero.name;
    hero.saying = originalHero.saying;
    hero.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(hero);
      console.log('Hero updated successfully!');
    });
  });
}

function deleteHero(req, res) {
  const id = parseInt(req.params.id, 10);
  Hero.findOneAndRemove({
      id: id
    })
    .then(hero => {
      if (!checkFound(res, hero)) return;
      res.status(200).json(hero);
      console.log('Hero deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function checkFound(res, hero) {
  if (!hero) {
    res.status(404).send('Hero not found.');
    return;
  }
  return hero;
}

function insertMobile(req, res) {
  const mobile = new Mobile({
    firstName: 'John',
    middleName: 'C',
    lastName: 'Yu',
    suffix: 'suffix',
    addressOne: '123 Fake Street',
    addressTwo: '#711',
    city: 'los Angeles',
    state: 'CA',
    zip: '90007',
    phoneNumber: '917-123-4567',
    debit: '1111222233334444',
    creditCard: '2222333344445555',
    donationAmt: '1',
    dateOfDonation: '09/14/2017',
    multiDonation: 'none',
    venue: 'Fenway',
    venueCity: 'Boston',
    venueState: 'MA',
    dateOfEvent: '09/14/2017',
    timeOfEvent: '17:00',
    artistEvent: 'Big',
    seatGrab: '35D',
    prizeOne: 'apple',
    priceTwo: 'orange',
    raffle50: 'macbook',
    reelOne: 'watch',
    reelTwo: 'bracelet',
    keyCode: '1234',
    vet: 'yes',
    vetRelated: 'yes',
    thermometer: 'yes',
    noThermometer: 'no',
    announcer: 'yes',
    noAnnouncer: 'no',
    email: '123@email.com',
    raffle: 'iphone',
    raffleFee: '1',
    sweeps: 'macbook pro',
    sweepsFee: '1',
  });
  insertManyObjs();
  mobile.save(error => {
    if (checkServerError(res, error)) return;
    console.log('Mobile created successfully!');
  });

  function insertManyObjs() {
    let data = [];

    for (var i = 0; i < 1000; i++) {
      let mobile = new Mobile(mobileObj)
      data.push(mobile)
    }
    return Mobile.insertMany(data);
  }
}

module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero,
  insertMobile
};
