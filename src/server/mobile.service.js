const Mobile = require('./mobile.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getMobiles(req, res) {
  const docquery = Mobile.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(mobiles => {
      res.status(200).json(mobiles);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postMobile(req, res) {
  const originalHero = { id: req.body.id, name: req.body.name, saying: req.body.saying };
  const mobile = new Mobile(originalHero);
  mobile.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(hero);
    console.log('Hero created successfully!');
  });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  getMobiles,
  postMobile
};
