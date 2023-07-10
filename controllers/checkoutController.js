const Product = require('../models/Product');

exports.calculateTotal = async (items) => {
  let total = 0;
  let op11Count = 0;
  let budsCount = 0;
  
  for(let i=0; i<items.length; i++) {
    const product = await Product.findOne({sku: items[i]});

    if(!product) {
      throw new Error('Product not found');
    }

    if(product.sku === 'op11') {
      op11Count++;
      if(op11Count > 4) {
        total += 899.99;  // Apply bulk discount for op11
      } else {
        total += product.price;
      }
    } else if(product.sku === 'buds') {
      budsCount++;
      if(budsCount % 3 !== 0) {  // Apply 3-for-2 deal for buds
        total += product.price;
      }
    } else {
      total += product.price;
    }
  }
  
  // Return the total, rounded to 2 decimal places

  return total.toFixed(2);  
};


