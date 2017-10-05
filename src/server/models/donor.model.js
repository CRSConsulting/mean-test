const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donorSchema = new Schema({
  createdAt: { type: Date, default: Date.now},
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,

}, {
  collection: 'donor',
  read: 'nearest'
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
