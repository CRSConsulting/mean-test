module.exports = {
  get: function (queryCondition) {
    var request = require('request');
    var headers = {
      'Authorization': `Token token="3xzZqrCGGpaTaY9tW2DP"`,
      'Accept': 'application/json',
      'Content-type': 'application/json'
    };
    // console.log('queryConditon verification', queryCondition);
    var dataString = `{"id":${queryCondition}}`;
    var options = {
      url: 'https://app.mobilecause.com/api/v2/reports/transactions.json?',
      method: 'GET',
      headers: headers,
      body: dataString
    }
    return new Promise((resolve, reject) => {
      request(options, function (error, results, fields) {
        console.log('promise results', results);
        if (error) throw error
        return resolve(results)
      })
    })
  }
}
