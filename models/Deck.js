const mongoose = require('mongoose');
const {Schema} = mongoose;

const deckSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('decks', deckSchema);

