const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

require('./models/User');
require('./services/passportConfig');

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
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
