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

  app.get('/api/user/:id/decks', async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id).populate('decks');
    res.send(user.decks)
  })

};