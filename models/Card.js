const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
  name: String
});

mongoose.model('cards', cardSchema);

