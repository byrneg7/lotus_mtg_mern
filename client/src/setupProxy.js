const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/auth/google', {target: 'http://localhost:9000'}));
  app.use(proxy('/auth/google/callback', {target: 'http://localhost:9000'}));
  app.use(proxy('/api/decks', {target: 'http://localhost:9000'}));
  app.use(proxy('/api/logout', {target: 'http://localhost:9000'}));
  app.use(proxy('/api/current_user', {target: 'http://localhost:9000'}));
  app.use(proxy('/api/user/*/decks', {target: 'http://localhost:9000'}));
  app.use(proxy('/api/cards', {target: 'http://localhost:9000'}));
  app.use(proxy('/api/decks/*', {target: 'http://localhost:9000'}));
  app.use(proxy('/mtg/cards/*', {target: 'http://localhost:9000'}))
};