const Promise = require('bluebird');
const cmd = require('node-cmd');

const getAsync = Promise.promisify(cmd.get, {
  multiArgs: true,
  context: cmd
})

function delay(t) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t)
  });
}

function getKeyword(req, res) {
  getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"keyword":""}' "https://app.mobilecause.com/api/v2/reports/transactions.json?"`)
    .then(data => {
      let terminalData = data[0].split('{ "id": ')[1];
      let id = terminalData.split('"')[1];
      let newId = `"${id}"`
      return delay(1000).then(() => {
        console.log('start');
        return getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"id":${newId}}' "https://app.mobilecause.com/api/v2/reports/results.json?"`)
      }).catch(err => {
        console.log('err', err);
      })
    })
    .then(data => {
      console.log('data=====', data);
    }).catch(err => {
      console.log('err', err);
    })
}

getKeyword();
