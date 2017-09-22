module.exports = {
  get: function () {
    var request = require('request');
    var headers = {
      'Authorization': `Token token="3xzZqrCGGpaTaY9tW2DP"`,
      'Accept': 'application/json',
      'Content-type': 'application/json'
    };

    var dataString = '{"keyword":"Location123"}';

    var options = {
      url: 'https://app.mobilecause.com/api/v2/reports/transactions.json?',
      method: 'GET',
      headers: headers,
      body: dataString
    }
    return new Promise((resolve, reject) => {
      request(options, function (error, results, fields) {
        if (error) throw error
        return resolve(results)
      })
    })
  }
}
