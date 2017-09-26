// module.export = {
//   post: function () {
//Example POST method invocation 
var Client = require('node-rest-client').Client;
var options_auth = {
  user: "NTW_TWW_test",
  password: "&ssBEWSvklcj?ctYjDDMCVROPjNUdnXHo&KRgvUykFP$"
};
var client = new Client(options_auth);

// set content-type header and data as json in args parameter 
var args = {
  data: {
    accountIdentifier: "ntw-one",
    amount: 10,
    customerIdentifier: "test-customer",
    emailSubject: "New Order",
    message: "testing",
    recipient: {
      email: "john.crs.consulting@gmail.com",
      firstName: "1pm Tuesday",
      lastName: "testing"
    },
    sendEmail: true,
    sender: {
      email: "john@crs-consulting.com",
      firstName: "John",
      lastName: "Yu"
    },
    utid: "U561593"
  },
  headers: {
    "Content-Type": "application/json"
  }
};
let dataObj;
client.post("https://integration-api.tangocard.com/raas/v2/orders", args, function (data, response) {
  dataObj = data
  newFunctionOne();
}).on('error', function (err) {
  console.log('something went wrong on the request', err.request.options);
});
// handling client error events 
client.on('error', function (err) {
  console.error('Something went wrong on the client', err);
});
//   }
// }


function newFunctionOne() {
  console.log('dataOBJ', dataObj);
}
module.exports = {
  post: newFunctionOne
}
