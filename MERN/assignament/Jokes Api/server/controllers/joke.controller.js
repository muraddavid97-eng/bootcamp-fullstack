const Joke = require("../models/joke.model");
module.exports.createJoke = async (req, res) => {
  try {
    const newJoke = await Joke.create(req.body);
    return res.json({ joke: newJoke });
  } catch (err) {
    console.log("error", err);
    return res.json(err);
  }
};

module.exports.updateJoke = async (req, res) => {
  try {
    const newJoke = await Joke.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true },
    );
    if (!newJoke) {
      return res.json({ message: "joke not found " });
    }

    return res.json({ joke: newJoke });
  } catch (err) {
    console.log("error", err);
    return res.json(err);
  }
};

module.exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    return res.json({ jokes: jokes });
  } catch (err) {
    console.log("error", err);
    return res.json(err);
  }
};
module.exports.getJokebyId = async (req, res) => {
  try {
    const joke = await Joke.findbyid(req.params.id);

    if (!joke) {
      return res.json({ message: "joke not find" });
    }
    return res.json({ joke: joke });
  } catch (err) {
    console.log("error", err);
    return res.json(err);
  }
};


module.exports.deleteJoke = async (req, res) => {
  try {
    const deleteJoke = await Joke.findByIdAndDelete(req.params.id);

    if (!deleteJoke) {
      return res.json({ message: "joke not find" });
    }
    return res.json({ message: "joke not find" });
  } catch (err) {
    console.log("error", err);
    return res.json(err);
  }
};