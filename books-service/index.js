const express = require('express');
const app = express();
const connectDB = require('./config/db');
const booksRoutes = require('./routes/booksRoutes');

require('dotenv').config();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use('/', booksRoutes);

app.listen(PORT, () => {
    console.log(`Books service is running on port ${PORT}.`);
});