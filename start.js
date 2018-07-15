const mongoose = require('mongoose');

//import environmental variables
require('dotenv').config({ path: 'variables.env' });

//connect to db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise; //tell mongo to use es6 promises
mongoose.connection.on('error', (err) => {
  console.error(`ERROR ${err.message}`);
})

//log success
mongoose.connection.on('connected', function () {  
  console.log(`Mongoose default connection open on ${process.env.DATABASE}`)
}); 

//log disconnect
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

//import all models
require('./models/Entry')

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

