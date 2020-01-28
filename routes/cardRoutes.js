const mongoose = require('mongoose');

const Card = mongoose.model('cards');
const User = mongoose.model('users');

module.exports = (app) => {

  app.post('/api/cards', async (req, res) => {
    const cards = req.body.cards;

    const newCards = await Card.insertMany(cards);
    const userById = await User.findById(req.user.id);
    newCards.forEach(card => userById.cards.push(card));

    await userById.save()
      .then(cards => res.send(cards))
      .catch(err => res.send(err))
  });


  app.get('/api/cards', async (req, res) => {
    const user = req.user;
    const userWithCards = await User.findById(user.id).populate('cards');
    res.send(userWithCards)
  })
};