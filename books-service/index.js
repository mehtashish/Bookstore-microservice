const express = require('express');
const app = express();
const connectDB = require('./config/db');
const Book = require('./model/booksModel');

require('dotenv').config();
const PORT = process.env.PORT;

connectDB();


app.listen(PORT, () => {
    console.log(`Books service is running on port ${PORT}.`);
});