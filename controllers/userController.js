const User=require("../models/userModels");
 const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 const getUserById = async (req, res) => {
    try {
        const users = await User.find({ _id: req.params.id });
        if (!users) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createUser = async (req, res) => {
    try {
     /*   if (!req.body || !req.body.name || !req.body.age) {
            return res.status(400).json({ message: 'Invalid request body' });
        }*/
        const newUser = new User({
            name: req.body.name,
            age: req.body.age
        });
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = req.body.name;
        user.age = req.body.age;
        await user.save();
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.deleteOne();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports={getAllUsers,getUserById,createUser,updateUser,deleteUser}