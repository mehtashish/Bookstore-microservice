const mongoose = require('mongoose');

const orderSchema = {
    userName: {
        type: String,
        required: true
    },
    bookTitle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    numberOfCopies: {
        type: Number
    }
};


module.exports = mongoose.model('Order', orderSchema);