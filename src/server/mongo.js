
const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;
console.log('++++++++++++++++++++++++++++++++++++++++++++')
// const mongoUri = process.env.MONGODB_URI
// const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const mongoUri = 'mongodb://username:password@ds151973.mlab.com:51973/738356255801'
function connect() {
 mongoose.set('debug', true);
 return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
