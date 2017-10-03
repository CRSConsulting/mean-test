const mobileModel = require('../models/mobile.model')
const mobilesService = require('../services/mobiles.services')({
  modelService: mobileModel // passing in this model object is allowed b/c we pass in 'options' to our serivce
})
const Promise = require("bluebird")

module.exports = mobilesController

function mobilesController() {
  return {
    getAll,
    insert,
    insertAll
  }

  function getAll(req, res) {
    mobilesService.getAll()
      .then(mobiles => {
        res.json(mobiles);
      })
      .catch(err => {
        res.status(500).send('error');
      })
  }

  function insert(req, res) {
    mobilesService.insert()
      .then(mobiles => {
        res.json(mobiles);
      })
      .catch(err => {
        res.status(500).send('error');
      })
  }
  function insertAll(req, res) {
    let array = mobilesService.loop()
    let batchOne = mobilesService.loop(0);
    let batchTwo = mobilesService.loop(1);
    let batchThree = mobilesService.loop(2);
    let first = mobilesService.insertMany(batchOne)
    let second = mobilesService.insertMany(batchTwo)
    let third = mobilesService.insertMany(batchThree)
    Promise.all(first, second, third)
      .then(mobiles => {
        res.json(mobiles);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
