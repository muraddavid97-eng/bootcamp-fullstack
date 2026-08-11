const Product = require("../models/product.model");

// CREATE
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// GET ALL
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// GET ONE
module.exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// UPDATE
module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// DELETE
module.exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
