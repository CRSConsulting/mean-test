// const Promise = require('bluebird');
// const cmd = require('node-cmd');

// console.log('start');
// const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })

// // getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"keyword":"Location123"}' "https://app.mobilecause.com/api/v2/reports/transactions.json?"`).then(data => {
// //   console.log('cmd data', data);
// // }).catch(err => {
// //   console.log('cmd err', err);
// // })
// // let keyOne = `curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"keyword":"Location123"}' "https://app.mobilecause.com/api/v2/reports/transactions.json?"`

// var files = [];
// for (var i = 0; i < 1; ++i) {
//     files.push(getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"keyword":["Location222", "Location111"]}' "https://app.mobilecause.com/api/v2/reports/transactions.json?"`));
// }
// console.log('files+++++=================================++++', files)
// Promise.all(files)
// .then(function(data) {
// getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d ' {"id":"429394"}' "https://app.mobilecause.com/api/v2/reports/results.json?"`).then(data => {console.log('data', data)}).catch(err => {console.log('err', err)})
// }).catch(err => {
//   console.log('err', err)
// })

// console.log('end');