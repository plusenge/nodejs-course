
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { "Content-type": "text/html" })
    fs.readFile("temp/test.html","utf8" ,(err, data) => {
      if (err) throw err;
      res.write(data);
      res.end()
    })
}else if (req.url === "/create-file") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = "<h1>This is the test file updated</h1>"
    for (let i = 0; i < 10; i++){
      fs.appendFile("temp/test.html", data, (err) => {
        if (err) throw err;
      })
    }

      res.write("<h1>This is the test file</h1");
      res.end()
   
  } else {
    res.writeHead(404,{"Content-Type": "text/html"})
    fs.readFile("page/404.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
     })
  }

})

const port = 3000;
server.listen(port, (err) => {
console.log("Server listening on port " + port)
})


const Circle = require('./circle');
const circle = new Circle();
console.log(circle.area(5))

console.log(__filename);
console.log(__dirname);
console.log(process.env.PWD)
console.log(global.process.env.PWD)


const Circle = require("./circle")

console.log(`circle area:`, circle.area(5))
console.log(`circumference:`,circle.circumference(5))




