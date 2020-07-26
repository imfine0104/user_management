const express = require('express');
const controller = require('../controllers/product.controller');


const router = express.Router();
// Router GET
router.get('/', controller.index); 
router.get('/search', controller.search);





module.exports = router;