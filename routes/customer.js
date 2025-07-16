const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/', customerController.getAllCustomer);
router.get('/:id', customerController.getcustomerById);
router.post('/', userController.addcustomer);



module.exports = router;