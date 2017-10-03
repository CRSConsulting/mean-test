require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const publicweb = './dist/publicweb';
const mongoose = require('mongoose');
const app = express();
// mongoose
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017')
process.on('SIGNT', function(){
  mongoose.connection.close(function (){
    console.log('Mongoose default connection disonnected through application termination');
  })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

// routes
app.use('/api', routes)
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: publicweb });
});

const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));

// module.exports = app;