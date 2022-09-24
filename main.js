const express = require("express");
const app = express();
const PORT = 5000;
const routes = require("./routes/index")

app.use(routes)

app.listen(PORT,() => {
  console.log(`Server is running at https://localhost:${PORT}`);
})

