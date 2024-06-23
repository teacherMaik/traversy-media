import http from 'http';

const PORT = 5555;

const server = http.createServer((req, res) => {

  /* res.write('Hello World');
  req.end(); */

  /* res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>'); */

  res.writeHead(500, { 'Content-Type': 'application/json'});
  res.end(JSON.stringify({ message: 'Server Error'}));
});

server.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});