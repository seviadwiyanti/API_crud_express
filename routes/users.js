const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteuser);
router.put('/:id', userController.updateuser);
router.get('/:id', userController.getuserById);



module.exports = router;
