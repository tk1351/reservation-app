const express = require('express');
const router = express.Router();
const Product = require('../model/product'); 

router.get('', (req, res) => {
  Product.find({}, function(err, foundProducts) {
    return res.json(foundProducts);
  })
})

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, function(err, foundProducts) {
    if(err) {
      return res.status(422).send({erros: [{title: 'Product error', detail: 'Product not found'}]});
    }
    return res.json(foundProducts);
  })
})

module.exports = router;