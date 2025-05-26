const express = require('express');
const { getOrders, deleteOrder, updateOrder, addOrder } = require('../controllers/orderControllers');
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management APIs
 */

/**
 * @swagger
 * /Orders:
 *   get:
 *     summary: Retrieve all Orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of Orders
 */
router.get('/orders', getOrders);


/**
 * @swagger
 * /addOrder:
 *   post:
 *     summary: Add a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                  type: string
 *               bookTitle:
 *                 type: string
 *               price:
 *                 type: integer
 *               numberOfCopies:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Order added successfully
 */
router.post('/addOrder', addOrder);


/**
 * @swagger
 * /updateOrder/{id}:
 *   put:
 *     summary: Update a order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                  type: string
 *               bookTitle:
 *                 type: string
 *               price:
 *                 type: integer
 *               numberOfCopies:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */
router.put('/updateOrder/:id', updateOrder);


/**
 * @swagger
 * /deleteOrder/{id}:
 *   delete:
 *     summary: Delete a order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */
router.delete('/deleteOrder/:id', deleteOrder);


module.exports = router;