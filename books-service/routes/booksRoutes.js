const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/booksController');
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management APIs
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 */
router.get('/books', getBooks);


/**
 * @swagger
 * /addBook:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedYear:
 *                 type: integer
 *               genre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book added successfully
 */
router.post('/addBook', addBook);


/**
 * @swagger
 * /updateBook/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
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
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedYear:
 *                 type: integer
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 */
router.put('/updateBook/:id', updateBook);


/**
 * @swagger
 * /deleteBook/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete('/deleteBook/:id', deleteBook);


module.exports = router;