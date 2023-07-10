const Product = require('../models/Product');

exports.createProduct = async (req) => {
  const product = new Product({
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price
  });

  try {
    const newProduct = await product.save();
    return newProduct;
  } catch(err) {
    throw err;
  }
};
