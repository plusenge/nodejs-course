const express = require("express");
const router = require("./routes/index");
const app = express();
const PORT = 5000;
const routes = require("./routes/index")

app.listen(PORT,() => {
  console.log(`Server is running at https://localhost:${PORT}`);
})

app.use(routes)
