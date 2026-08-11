const JokeController = require("../controllers/joke.controller")
module.exports = (app)=>{
  app.get("/api/GET/jokes/",JokeController.getAllJokes)
  app.get("/api/GET/jokes/:id",JokeController.getJokebyId)
  app.post("/api/POST/jokes/",JokeController.createJoke)
  app.patch("/api/PATCH/jokes/",JokeController.updateJoke)
  app.delete("/api/DELETE/jokes/",JokeController.deleteJoke)
}

