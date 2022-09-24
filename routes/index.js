
const express = require("express");
const router = express.Router()

router
  .route("/book")
  .get((req, res) => {
  res.send("All books")
  })
  .post((req, res) => {
    res.json({
    data: "Book is posted",
    message: "Welcome to Book store!",
  })
})

router.get('/book/:id', (req, res) => {
  res.send(req.params.id)
})

router.all('/*', (req, res) => {
  res.send("PAGE NOT FOUND")
})

module.exports = router;