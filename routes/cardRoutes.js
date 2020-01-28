const mongoose = require('mongoose');

const Card = mongoose.model('cards');
const User = mongoose.model('users');

module.exports = (app) => {

  app.post('/api/cards', async (req, res) => {
    const cards = req.body.cards;

    await Card.insertMany(cards)
      .then(cards => res.send(cards))
      .catch(err => res.send(err))
  });


  app.get('/api/user/:id/cards', async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id).populate('cards');
    res.send(user.cards)
  })
};