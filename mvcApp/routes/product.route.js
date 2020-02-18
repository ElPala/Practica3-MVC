const router = require('express').Router();
let productController = require('../controllers/product.controller');
const auth = require('../middleware/auth');

router.get('/', productController.read);

router.get('/:id/',auth, productController.readById);
   
module.exports = router;