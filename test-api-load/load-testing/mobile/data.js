module.exports = {
  generateRandomData,
};

const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const firstName = Faker.random.word();
  const middleName = Faker.random.word();
  const lastName = Faker.random.word();
  const suffix = Faker.random.word();
  const addressOne = Faker.random.word();
  const addressTwo = Faker.random.word();
  const city = Faker.random.word();
  const state = Faker.random.word();
  const zip = Faker.random.word();
  const phoneNumber = Faker.random.word();
  const debit = Faker.random.word();
  const creditCard = Faker.random.word();
  const donationAmt = Faker.random.word();
  const dateOfDonation = Faker.random.word();
  const multiDonation = Faker.random.word();
  const venue = Faker.random.word();
  const venueCity = Faker.random.word();
  const venueState = Faker.random.word();
  const dateOfEvent = Faker.random.word();
  const timeOfEvent = Faker.random.word();
  const artistEvent = Faker.random.word();
  const seatGrab = Faker.random.word();
  const prizeOne = Faker.random.word();
  const priceTwo = Faker.random.word();
  const raffle50 = Faker.random.word();
  const reelOne = Faker.random.word();
  const reelTwo = Faker.random.word();
  const keyCode = Faker.random.word();
  const vet = Faker.random.word();
  const vetRelated = Faker.random.word();
  const thermometer = Faker.random.word();
  const noThermometer = Faker.random.word();
  const announcer = Faker.random.word();
  const noAnnouncer = Faker.random.word();
  const email = Faker.random.word();
  const raffle = Faker.random.word();
  const raffleFee = Faker.random.word();
  const sweeps = Faker.random.word();
  const sweepsFee = Faker.random.word();
  // add variables to virtual user's context:
  userContext.vars.firstName = firstName;
  userContext.vars.middleName = middleName;
  userContext.vars.lastName = lastName;
  userContext.vars.suffix = suffix;
  userContext.vars.addressOne = addressOne;
  userContext.vars.addressTwo = addressTwo;
  userContext.vars.city = city;
  userContext.vars.state = state;
  userContext.vars.zip = zip;
  userContext.vars.phoneNumber = phoneNumber;
  userContext.vars.debit = debit;
  userContext.vars.creditCard = creditCard;
  userContext.vars.donationAmt = donationAmt;
  userContext.vars.dateOfDonation = dateOfDonation;
  userContext.vars.multiDonation = multiDonation;
  userContext.vars.venue = venue;
  userContext.vars.venueCity = venueCity;
  userContext.vars.venueState = venueState;
  userContext.vars.dateOfEvent = dateOfEvent;
  userContext.vars.timeOfEvent = timeOfEvent;
  userContext.vars.artistEvent = artistEvent;
  userContext.vars.seatGrab = seatGrab;
  userContext.vars.priceOne = prizeOne;
  userContext.vars.priceTwo = priceTwo;
  userContext.vars.raffle50 = raffle50;
  userContext.vars.reelOne = reelOne;
  userContext.vars.reelTwo = reelTwo;
  userContext.vars.keyCode = keyCode;
  userContext.vars.vet = vet;
  userContext.vars.vetRelated = vetRelated;
  userContext.vars.thermometer = thermometer;
  userContext.vars.noThermometer = noThermometer;
  userContext.vars.announcer = announcer;
  userContext.vars.noAnnouncer = noAnnouncer;
  userContext.vars.email = email;
  userContext.vars.raffle = raffle;
  userContext.vars.raffleFee = raffleFee;
  userContext.vars.sweeps = sweeps;
  userContext.vars.sweepsFee = sweepsFee;

  // continue with executing the scenario:
  return done();
}
