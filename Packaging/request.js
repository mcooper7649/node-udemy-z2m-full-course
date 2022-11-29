//shorthand export with module dropped. Module is optional
REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return 'encrypted data';
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sedning ${encryptedData} to ${url}`);
}

//Original Export

module.exports = {
  send,
  REQUEST_TIMEOUT,
};
