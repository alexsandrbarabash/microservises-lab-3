const mongoose = require('mongoose');


const kittenSchema = new mongoose.Schema({
  name: String
});


const Kitten = mongoose.model('Kitten', kittenSchema);

module.exports = {
  Kitten
}