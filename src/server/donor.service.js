const Donor = require('./donor.model');
const ReadPreference = require('mongodb').ReadPreference;


function getAll(req, res) {
  const docquery = Donor.find({}).limit(1000).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(donors => {
      res.status(200).json(donors);
    })
    .catch(error => {
      checkServerError(res, error);
    });
}


function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  getAll
};
