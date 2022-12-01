const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();

  next();
  //actions go here

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', friendsController.PostFriend);

app.get('/', (req, res) => {
  res.send({ id: 1, name: 'Sir Isaac Newton' });
});

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessages);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
