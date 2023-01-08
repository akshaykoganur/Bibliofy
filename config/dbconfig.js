const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB connected successfully');
})

connection.on('error', () => {
    console.log('Error while connecting MongoDB');
})

module.exports = mongoose;