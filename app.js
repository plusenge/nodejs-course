const http = require("http");
const { request } = require("https");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World !',
    message: 'Omari the King'
  }));
})

const port = 3000
server.listen(port, (err) => {
  if (port !== 3000) {
    console.log("Wrong port number")
  } else {
    console.log("Server listening on port " + port)
  }
 })