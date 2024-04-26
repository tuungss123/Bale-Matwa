const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Name = new Schema({
  donor_name: {
    type: String
  },
  email: {
    type: String
  },
  contact: {
    type: String
  },
  fund: {
    type: String
  }
}, {
  collection: 'names'
})
 
module.exports = mongoose.model('Name', Name)