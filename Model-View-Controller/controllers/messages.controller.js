function getMessages(req, res) {
  res.send('<ul><li>Hello Albert Einstein!</li></ul>');
}

function postMessages(req, res) {
  console.log('updating messages....');
}

//Named functions vs anonymous or arrowFuncs node won't be able to get us additional information upon error

module.exports = {
  getMessages,
  postMessages,
};
