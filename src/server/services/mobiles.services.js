const ReadPreference = require('mongodb').ReadPreference;
const mobileObj = require('./test-data/mobile.data');
const mobileJSON = require('./test-data/mobile.many.data');

module.exports = mobilesService

function mobilesService(options) {
  let Mobile;

  if (!options.modelService) {
    throw new Error('Options.modelService is required')
  }

  Mobile = options.modelService

  return {
    getAll,
    insert
  }

  function getAll() {
    return Mobile.find({}).limit(1000).read(ReadPreference.NEAREST);
  }

  function insert() {
    const data = [];

    for (let i = 0; i < 1000; i++) {
      const mobile = new Mobile(mobileObj)
      data.push(mobile)
    }
    return Mobile.insertMany(data);
  }
}
