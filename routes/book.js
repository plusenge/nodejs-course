
const express = require("express");
const bookRouter = express.Router()

bookRouter
  .route("/")
  .get((req, res) => {
  res.send("All books")
  })
  .post((req, res) => {
    res.json({
    data: "Book is posted",
    message: "Welcome to Book store!",
  })
})

bookRouter.get('/:id', (req, res) => {
  res.send(req.params.id)
})

bookRouter.all('/*', (req, res) => {
  res.send("PAGE NOT FOUND")
})

module.exports = bookRouter;