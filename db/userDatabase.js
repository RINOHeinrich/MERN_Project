const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/database')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
module.exports = mongoose;