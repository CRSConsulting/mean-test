const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const mongoUri = process.env.MONGODB_URI
// const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const mongoUri = 'mongodb://username:password@ds151973.mlab.com:51973/738356255801'

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, {
    useMongoClient: true
  });
}

module.exports = {
  connect,
  mongoose
};
