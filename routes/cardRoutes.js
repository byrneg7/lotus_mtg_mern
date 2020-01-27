const mongoose = require('mongoose');

const Card = mongoose.model('cards');
const Deck = mongoose.model('decks');
const User = mongoose.model('users');

module.exports = (app) => {

  app.post('/api/cards', async (req, res) => {
    const user = req.user;
    const card = req.body;

    console.log(user);
    console.log(card);

    res.send({hello: world})

    //   const card = await Card.create({
    //     name,
    //     description,
    //     user: user.id,
    //     deck: deck.id
    //   });
    //   await card.save();
    //
    //   const userById = await User.findById(user.id);
    //   userById.cards.push(card);
    //   await userById.save();
    //
    //   const deckById = await Deck.findById(deck.id);
    //   deckById.cards.push(card);
    //   await deckById.save();
    //
    //   res.send(card);
    // });
    //
    // app.get('/api/user/:id/cards', async (req, res) => {
    //   const {id} = req.params;
    //   const user = await User.findById(id).populate('cards');
    //   res.send(user.cards)
  })
};