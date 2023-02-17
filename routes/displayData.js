const express = require('express');
const router = express.Router();

router.get('/books', async(req,res) => {
    try{
        console.log(global.books);
        res.send(global.books);
    }
    catch(error){
        console.error(error.message);
        res.send("Server error");
    }
})

module.exports = router;