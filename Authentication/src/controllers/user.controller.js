const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/', async(req,res) => {
    try{
    
        const users = await User.find().select("-password").lean().exec();

        return res.send(users);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});


module.exports = router;