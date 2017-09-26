const Mobile = require('./mobile.model');
// const Tango = require('./tango.model');
const ReadPreference = require('mongodb').ReadPreference;
const mobileObj = require('./mobile.data');

// console.log('tangoService', tangoService);
require('./mongo').connect();

// function insertOrder(req, res){
//   console.log('tangoObj', tangoObj);
//   let order = new Tango(tangoObj)
//   order.save(error => {
//     if(checkServerError(res, error)) return;
//     res.status(201).json(order)
//   });
// }
function insertOrder(req, res){
  newFunction()
}

function getManyObjs(req, res) {
  const docquery = Mobile.find({}).limit(1000).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(mobiles => {
      res.status(200).json(mobiles);
    })
    .catch(error => {
      checkServerError(res, error);
    });
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

function newFunction() {
  const tangoService = require('./tango/tango.post');
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  insertManyObjs,
  getManyObjs,
  insertOrder
};



