const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mobileSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  {
    collection: 'mobiles',
    read: 'nearest'
  }
);

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;
