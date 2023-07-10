const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', async (req, res) => {
  try {
    const product = await productController.createProduct(req); // Creating new product
    res.status(201).json(product);
  } catch(err) {
    res.status(400).json({message: err.message});
  }
});

module.exports = router;
