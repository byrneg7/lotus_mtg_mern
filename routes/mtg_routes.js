const mongoose = require('mongoose');
const axios = require('axios');

module.exports = (app) => {
  app.get('/mtg/cards/:cardName', async (req, res) => {
    const cardName = req.params.cardName;
    await axios.get(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
      .then(mtgRes=>res.send(mtgRes.data))
  })
};