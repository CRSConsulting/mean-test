
const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

// const env = require('./env/environment');

// eslint-disable-next-line max-len
// const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds151973.mlab.com:51973/738356255801`; //&replicaSet=globaldb`;

const mongoUri = process.env.MONGODB_URI
function connect() {
 mongoose.set('debug', true);
 return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
