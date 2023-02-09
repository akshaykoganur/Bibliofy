const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB connected successfully');
    const fetched = mongoose.connection.db.collection("booksData");
    fetched.find({}).toArray(function(err,data){
        if(err) console.log(err);
        //else console.log(data);
    })
})

connection.on('error', () => {
    console.log('Error while connecting MongoDB');
})

module.exports = mongoose;