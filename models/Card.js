const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
  name: {
    type: String,
    required: 'Card name required'
  },
  text: {
    type: String,
    required: 'Card text required'
  },
  src: {
    type: String,
    required: 'Card image URL required'
  },
  types: {
    type: [String],
    required: 'Card type required'
  },
  rarity: {
    type: String,
    required: 'Card rarity required'
  },
  colours: {
    type: [String],
    required: 'Card colours required'
  },
  set: {
    type: String,
    required: 'Card set required'
  },
  power: {
    type: String,
  },
  mana:{
    type: String,
  },
  toughness: {
    type: String,
  },
  artist: {
    type: String,
    required: 'Card artist required'
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

