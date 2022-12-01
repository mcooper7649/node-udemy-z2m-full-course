const { log } = require('console');
const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Subscribe to celebrity for observer
celebrity.on('race win', () => {
  console.log('Congratulations you are the best!');
});

//Subscribe to celebrity for observer2
celebrity.on('race win', () => {
  console.log('Boo better luck next time!');
});

process.on('exit', (code) => {
  console.log(`Proces exit event with${code}`);
});

celebrity.emit('race win');
