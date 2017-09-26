const Promise = require('bluebird');
const cmd = require('node-cmd');


const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })



var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout),
  prefix = 'OHAI> ';


rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
getAsync(`curl -v -D - -H 'Authorization: Token token="3xzZqrCGGpaTaY9tW2DP"' -H "Accept: application/json" -H "Content-type: application/json" -X GET -d '{"keyword":"Location123"}' "https://app.mobilecause.com/api/v2/reports/transactions.json?"`).then(data => {
  console.log('cmd data', data);
}).catch(err => {
  console.log('cmd err', err);
})
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});
console.log(prefix + 'Good to see you. Try typing stuff.');
rl.setPrompt(prefix, prefix.length);
rl.prompt();
