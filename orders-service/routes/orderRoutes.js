const express = require('express');
const { getOrders, deleteOrder, updateOrder, addOrder } = require('../controllers/orderControllers');
const router = express.Router();

router.get('/orders', getOrders);
router.post('/addOrder', addOrder);
router.put('/updateOrder/:id', updateOrder);
router.delete('/deleteOrder/:id', deleteOrder);


module.exports = router;