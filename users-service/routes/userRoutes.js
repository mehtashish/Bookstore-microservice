const express = require('express');
const { addUser, updateUser, deleteUser } = require('../controllers/userControllers');
const router = express.Router();

router.post('/addUser', addUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);


module.exports = router;