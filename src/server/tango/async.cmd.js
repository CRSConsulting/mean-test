const Promise = require('bluebird');
const cmd = require('node-cmd');


const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })

getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"keyword":"Location123"}' "https://app.mobilecause.com/api/v2/reports/transactions.json?"`).then(data => {
  console.log('cmd data', data);
}).catch(err => {
  console.log('cmd err', err);
})
