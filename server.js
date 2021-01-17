const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  return res.send("Hello World from node!!!!");
});

app.listen(PORT, () => {
  console.log(`The server has started and is listening on Port: ${PORT}.`);
  app.close();
});
