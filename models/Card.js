const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
  name: {
    type: String,
    required: 'Card name required'
  },
  description: {
    type: String,
    required: 'Card description required'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: 'User attribute required to save card'
  },
  deck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'decks'
  }
});

mongoose.model('cards', cardSchema);

