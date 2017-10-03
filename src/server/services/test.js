const ReadPreference = require('mongodb').ReadPreference;
const mobileObj = require('./mobile.data');
const mobileJSON = require('./mobile.many.data');
const Promise = require('bluebird');


function insertMany(MobileJSON) {
    let Mobile;
    
      if (!options.modelService) {
        throw new Error('Options.modelService is required')
      }
    
      Mobile = options.modelService
  let batchOne = mobileJSON.slice(1, 1000);
  let batchTwo = mobileJSON.slice(1001, 2000);
  let batchThree = mobileJSON.slice(2001, 3000);
  Promise.join(batchOne, batchTwo, batchThree)
    .then(data => {
        onsole.log('start')
    return Mobile.insertMany(data, {ordered: false})
    })
    .then(data =>{
        console.log('end');
        console.log('data.............', data);
    })
    .catch(err => {
      console.log('err', err);
    })
}
insertMany();
