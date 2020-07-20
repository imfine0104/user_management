const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();
// Router GET
router.get('/', controller.index); 
router.get('/search', controller.search);
router.get('/create', controller.getCreate);
router.get('/:id', controller.view);

// Router POST
router.post('/create', controller.postCreate);

module.exports = router;