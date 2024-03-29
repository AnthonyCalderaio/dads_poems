//Install express server
const express = require("express");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dads-poems'));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/dads-poems/index.html");
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log(`App running on port ${process.env.PORT || 8080}.`);
});