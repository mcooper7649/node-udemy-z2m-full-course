const axios = require('axios');

axios
  .get('http://www.google.com')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log('Complete');
  });
