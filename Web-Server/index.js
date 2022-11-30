const http = require('http');
const PORT = 8000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/friends') {
    //Another method of setting header and statusCode
    res.statusCode == 200;
    res.setHeader('Content-Type', 'application/json');

    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    res.end(
      JSON.stringify({
        id: 1,
        name: 'Sir Isaac Newton',
      })
    );
  } else if (req.url === '/messages') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(
      JSON.stringify({
        id: 2,
        name: 'messages endpoint',
      })
    );
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
