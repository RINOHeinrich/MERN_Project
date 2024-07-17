
const users = [
    {id:1, name: 'John', age: 25 },
    { id:2,name: 'Jane', age: 30 },
    { id:3,name: 'Bob', age: 35 }
];
 const getAllUsers = async (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 const getUserById = async (req, res) => {
    try {
        const user = users.find(user => user.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createUser = async (req, res) => {
    try {
     /*   if (!req.body || !req.body.name || !req.body.age) {
            return res.status(400).json({ message: 'Invalid request body' });
        }*/
        console.log(req.body);
        const newUser = {
            id: users.length + 1,
            name: req.body.name,
            age: req.body.age
        };
        users.push(newUser);
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 const updateUser = async (req, res) => {
    try {
        const user = users.find(user => user.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = req.body.name;
        user.age = req.body.age;
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
 const deleteUser = async (req, res) => {
    try {
        const user = users.find(user => user.id === parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports={getAllUsers,getUserById,createUser,updateUser,deleteUser}