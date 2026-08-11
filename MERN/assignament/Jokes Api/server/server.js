const express = require("express");
const app = express();
const PORT = 8000;
require("./config/mongoose.config");
const jokeRoutes = require("./routes/joke.routes");
jokeRoutes(app);

app.Listen(PORT, () => {
  console.log("server is running");
});
