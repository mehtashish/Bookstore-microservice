const Book = require("../model/booksModel");

const getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

const addBook = async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
};

const updateBook = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedBook) {
        return res.status(404).send('Book not found!')
    }

    res.json(updatedBook);
};

const deleteBook = async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
        return res.status(404).send('Book not found!');
    }

    res.json(deletedBook);
};


module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook
};