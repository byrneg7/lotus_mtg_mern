const mongoose = require('mongoose');

const Deck = mongoose.model('decks');
const User = mongoose.model('users');

module.exports = (app) => {

  app.post('/api/decks', async (req, res) => {
    const user = req.user;
    const {name, description} = req.body;

    const deck = await Deck.create({name, description, user: user.id});
    await deck.save();

    const userById = await User.findById(user.id);
    userById.decks.push(deck);
    await userById.save();

    res.send(deck);
  });

  app.get('/api/decks', async (req, res) => {
    const userWithDecks = await User.findById(req.user._id).populate('decks');
    res.send(userWithDecks.populate('decks'))
  });

  app.get('/api/decks/:deckId', async (req, res) => {
    const deck = await Deck.findById(req.params.deckId).populate('cards');
    res.send(deck)
  });

  app.post('/api/decks/:deckId/cards', async (req, res) => {
    const cards = req.body.cards;
    const deckById = await Deck.findById(req.params.deckId);
    cards.forEach(card => deckById.cards.push(mongoose.Types.ObjectId(card.id)));

    await deckById.save()
      .then(cards => res.send(cards))
      .catch(err => res.send(err))
  });

  app.delete('/api/decks/:deckId', async (req, res) => {
    await Deck.findByIdAndRemove(req.params.deckId)
      .then(deletedDeck => res.send(deletedDeck))
      .catch(err => res.send(err))
  });

};