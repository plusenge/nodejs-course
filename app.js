const http = require("http");
const { request } = require("https");

const server = http.createServer((req, res) => {
  res.write("Hello Nodejs");
  res.end();
})

const port = 3000
server.listen(port, (err) => {
  if (port !== 3000) {
    console.log("Wrong port number")
  } else {
    console.log("Server listening on port " + port)
  }
 })