const ReadPreference = require('mongodb').ReadPreference;
const mobileObj = require('./mobile.data');
const mobileJSON = require('./mobile.many.data');

module.exports = mobilesService

function mobilesService(options) {
  let Mobile;

  if (!options.modelService) {
    throw new Error('Options.modelService is required')
  }

  Mobile = options.modelService

  return {
    getAll,
    insert,
    insertMany,
    loop
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
  function insertMany(data) {
    return Mobile.insertMany(data);
  }
  ß
  function loop(start){
    let index = start * 1000
  
    let array = mobileJSON;
    let batchOne = array.slice(index, index + 999);

    // for (let i = 0; i < 1000; i++) {
    //   const mobile = new Mobile(mobileObj)
    //   data.push(mobile)
    // }
    return batchOne;
  }
}
