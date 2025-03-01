const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/Card');
require('./models/Deck');
require('./models/User');
require('./services/passportConfig');

const app = express();

// -------------------- middleware ------------------------
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// ---------------- routes --------------------------------
require('./routes/authRoutes')(app);
require('./routes/deckRoutes')(app);
require('./routes/cardRoutes')(app);
require('./routes/mtg_routes')(app);

// ---------------- db ------------------------------------
mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", () => {
  console.log("> error occurred from the database");
});
db.once("open", () => {
  console.log("> successfully opened the database");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require('path');
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  });
}

const PORT = process.env.PORT || 9000;
app.listen(PORT);
