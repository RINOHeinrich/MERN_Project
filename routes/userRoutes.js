const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Define your routes here
// Create
router.get('/', (req, res) => {
    // Code to create a new user
   userController.getAllUsers(req, res);
});

// Reads
router.get('/:id', (req, res) => {
    // Code to get a user by ID
    userController.getUserById(req, res);
});
router.post('/', (req, res) => {
    // Code to create a new user
    userController.createUser(req, res);
});
// Update
router.put('/:id', (req, res) => {
  // Code to update a user by ID
    userController.updateUser(req, res);
});

// Delete
router.delete('/:id', (req, res) => {
    // Code to delete a user by ID
    userController.deleteUser(req, res);
});

module.exports = router;