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

function insertManyObjs(req, res) {
  const data = [];

  for (let i = 0; i < 1000; i++) {
    const mobile = new Mobile(mobileObj)
    data.push(mobile)
  }
  return Mobile.insertMany(data, error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(data);
    console.log('InsertManyObjs updated successfully!');
  });
}

function getManyObjs(req, res) {
  const docquery = Mobile.find({}).limit(1000).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(mobiles => {
      res.status(200).json(mobiles);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function insertOneMobile(req, res) {
  const mobileData = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    suffix: req.body.suffix,
    addressOne: req.body.addressOne,
    addressTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phoneNumber: req.body.phoneNumber,
    debit: req.body.debit,
    creditCard: req.body.creditCard,
    donationAmt: req.body.donationAmt,
    dateOfDonation: req.body.dateOfDonation,
    multiDonation: req.body.multiDonation,
    venue: req.body.venue,
    venueCity: req.body.venueCity,
    venueState: req.body.venueState,
    dateOfEvent: req.body.dateOfEvent,
    timeOfEvent: req.body.timeOfEvent,
    artistEvent: req.body.artistEvent,
    seatGrab: req.body.seatGrab,
    prizeOne: req.body.prizeOne,
    priceTwo: req.body.priceTwo,
    raffle50: req.body.raffle50,
    reelOne: req.body.reelOne,
    reelTwo: req.body.reelTwo,
    keyCode: req.body.keyCode,
    vet: req.body.vet,
    vetRelated: req.body.vetRelated,
    thermometer: req.body.thermometer,
    noThermometer: req.body.noThermometer,
    announcer: req.body.announcer,
    noAnnouncer: req.body.noAnnouncer,
    email: req.body.email,
    raffle: req.body.raffle,
    raffleFee: req.body.raffleFee,
    sweeps: req.body.sweeps,
    sweepsFee: req.body.sweepsFee,
  };
  const mobile = new Mobile(mobileData);
  mobile.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(mobile);
    console.log('insertOneMobile created successfully!');
  });
}
// }

module.exports = {
  getHeroes,
  postHero,
  putHero,
  deleteHero,
  insertManyObjs,
  getManyObjs,
  insertOneMobile
};
