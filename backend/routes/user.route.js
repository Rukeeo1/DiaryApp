//this guy would handle all necessary routes for getting <users className="">
const express = require('express')
const router = express.Router();


router.get('/', (req,res) => {
    //do something with the controller....
    console.log(req.body)
    res.send('hello boo my mum')
})

module.exports = router