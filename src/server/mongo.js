const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = process.env.MONGODB_URI

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
