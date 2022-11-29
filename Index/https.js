const { send, read } = require('./internals');

// const { send } = require('./request');
// const { read } = require('./response');

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);

//shorthand to export and import at once..using spread operator

// module.exports = {
//   ...require('./request'),
//   ...require('./response'),
// };
