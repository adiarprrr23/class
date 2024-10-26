const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

if (require.main === module) {
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
})};

module.exports = app
