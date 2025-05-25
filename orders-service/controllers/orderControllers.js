const Order = require('../model/ordersModel');

const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

const addOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order is been placed!" });
};

const updateOrder = async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedOrder) {
        return res.status(404).send("There is no order found from this user!");
    }

    res.send("Here is the updated order of yours:");
    res.json(updatedOrder);
};

const deleteOrder = async (req, res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.body);
    if (!deletedOrder) {
        return res.status(404).send("There is no order found from this user!");
    }

    res.send("The requested order is deleted successfully!");
    res.json(deletedOrder);
};


module.exports = {
    getOrders,
    addOrder,
    updateOrder,
    deleteOrder
};