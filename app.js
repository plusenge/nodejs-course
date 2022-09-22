const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { "Content-type": "text/html" })
    fs.readFile("page/home.html","utf8" ,(err, data) => {
      if (err) throw err;
      res.write(data);
      res.end()
    })
}else if (req.url === "/create-file") {
    res.writeHead(200, { "Content-Type": "text/html" })
    fs.writeFile("temp/test.html", "<h1>Page created!</h1>", (err, data) => {
      if (err) throw err;
      res.write("File created successfully!");
      res.end()
    })


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
 
// const Circle = require('./circle');
// const circle = new Circle();
// console.log(circle.area(5))

// console.log(__filename);
// console.log(__dirname);
// console.log(process.env.PWD)
// console.log(global.process.env.PWD)


// const Circle = require("./circle")

// const circle = new Circle()
// console.log(`circle area:`, circle.area(5))
// console.log(`circumference:`,circle.circumference(5))




