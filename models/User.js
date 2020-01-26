const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: 'Google Profile ID required'
  },
  name: {
    type: String,
    required: 'Name is required.'
  },
  email: {
    type: String,
    required: 'Email is required'
  },
  decks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'decks'
    }
  ],
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cards'
    }
  ]
});

mongoose.model('users', userSchema);

