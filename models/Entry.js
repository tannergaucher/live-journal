const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//create Schema
const entrySchema = new mongoose.Schema ({
  title: {
    type: String
  },
  text: {
    type: String
  }
});

module.exports = mongoose.model('Entry', entrySchema);

