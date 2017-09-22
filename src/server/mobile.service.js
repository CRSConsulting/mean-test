const Mobile = require('./mobile.model');
const ReadPreference = require('mongodb').ReadPreference;
const mobileObj = require('./data');
const curlGetOne = require('./curl-mobile/getOne');
const curlGetTwo = require('./curl-mobile/getTwo');
require('./mongo').connect();


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

// function curlServiceGet(req, res) {
//   curlGet.get()
//   .then(data =>{
//     let queryCondition = JSON.parse(data.body);
//     console.log('queryCondition', queryCondition.id)
//     curlGetTwo.get(queryCondition.id)
//   })
//   .catch(error =>{
//     checkServerError(res, error);
//   })
// }ƒ
// function curlServiceGet(req, res) {
//   curlGet.get()
//     .then(data => {
//       let queryCondition = data.body
//       curlGetTwo.get(queryCondition)
//         .then(data => {
//           res.status(200).json(data);
//         }).catch(error => {
//           checkServerError(res, error);
//         })
//     })
//     .catch(error => {
//       checkServerError(res, error);
//     })
// }

function curlServiceGet(req, res) {
  curlGetOne.get()
    .then(data => {
      // console.log('First .then()data', data);
      let queryCondition = data.body
      // console.log('queryCondition', queryCondition);
      curlGetTwo.get(queryCondition)
        .then(data => {
          console.log('Second .then()data', data.body);
          res.status(200).json(data.body);
        }).catch(error => {
          checkServerError(res, error);
        })
    })
    .catch(error => {
      checkServerError(res, error);
    })
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
  curlServiceGet
  // curlServicePost
};
