const User = require('../model/usersModel');

const addUser = async (req, res) => {
    const newUser = await new User(req.body);
    res.status(201).send(`Welcome ${newUser.name}`);
};

const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedUser) {
        return res.status(404).send('User not found');
    }

    res.json(updatedUser);
};

const deleteUser = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        return res.status(404).send('User not found');
    }

    res.json(deletedUser);
};

module.exports = {
    addUser,
    updateUser,
    deleteUser
};