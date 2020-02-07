const mongoose = require('mongoose');

const Card = mongoose.model('cards');
const Deck = mongoose.model('decks');
const User = mongoose.model('users');

module.exports = (app) => {

  app.post('/api/cards', async (req, res) => {
    const {cards, deck} = req.body;
    const newCards = await Card.insertMany(cards);
    const deckById = await Deck.findById(deck.value);
    newCards.forEach(card => deckById.cards.push(mongoose.Types.ObjectId(card._id)));
    await deckById.save()
      .then(cards => res.send(cards))
      .catch(err => res.send(err))
  });

  app.get('/api/cards', async (req, res) => {
    const userWithDecks = await User.findById(req.user._id).populate('decks');
    const allCardIds = [];

    userWithDecks.decks.forEach(deck => {
      deck.cards.forEach(card => allCardIds.push(card))
    });

    const cards = await Card.find({_id: {$in: allCardIds}});
    res.send({cards: cards})
  });


};