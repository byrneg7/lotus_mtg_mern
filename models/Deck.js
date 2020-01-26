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
  },
  cards: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cards'
  }
});

mongoose.model('decks', deckSchema);

