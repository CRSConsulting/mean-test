const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  createdAt: { type: Date, default: Date.now},
  firstName: String,
  middleName: String,
  lastName: String,
  suffix: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,
  phoneNumber: String,
  debit: String,
  creditCard: String,
  donationAmt: String,
  dateOfDonation: String,
  multiDonation: String,
  venue: String,
  venueCity: String,
  venueState: String,
  dateOfEvent: String,
  timeOfEvent: String,
  artistEvent: String,
  seatGrab: String,
  prizeOne: String,
  priceTwo: String,
  raffle50: String,
  reelOne: String,
  reelTwo: String,
  keyCode: String,
  vet: String,
  vetRelated: String,
  thermometer: String,
  noThermometer: String,
  announcer: String,
  noAnnouncer: String,
  email: String,
  raffle: String,
  raffleFee: String,
  sweeps: String,
  sweepsFee: String,
}, {
  collection: 'mobileCause',
  read: 'nearest'
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;
