const express = require('express');
const router = express.Router();
const CheckoutController = require('../controllers/CheckoutController');

router.post('/', async (req, res) => {
    try {
      const total = await CheckoutController.calculateTotal(req.body.items);  // Calculate total
      res.json({total: total});
    } catch(err) {
      res.status(500).json({message: err.message});
    }
  });

  module.exports = router;