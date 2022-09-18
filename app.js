const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello node!");
  res.end()
})
const port = 3000;
server.listen(port, () => {
  console.log("server listening on port " + port)
})