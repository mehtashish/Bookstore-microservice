const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/booksController');
const router = express.Router();

router.get('/books', getBooks);
router.post('/addBook', addBook);
router.put('/updateBook/:id', updateBook);
router.delete('/deleteBook/:id', deleteBook);


module.exports = router;