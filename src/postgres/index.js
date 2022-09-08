const express = require("express");
const db = require("./queries");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/poems', db.getAllPoems);
app.get("/:id", (request, response) => {
  db.getPoemByName(request.params.id, response)
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
