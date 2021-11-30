const express = require('express');
const router = express.Router();

const User = require('../model/user.model');
const sendMail = require('../utils/send-mail');

router.get('/', async (req,res) => {
    try{

        let page = +req.query.page || 1;
        let size = +req.query.size || 5;

        let skip = (page - 1) * size ;

        const users = await User.find().skip(skip).limit(size).lean().exec();

        const totalPages = Math.ceil((await User.find().countDocuments()) / size);

        return res.json({users, totalPages});

    } catch(err){
        res.status(500).send({message: err.message, status: 'failed'});
    }
});

router.post('/', async (req,res) => {
    try{

        const user = await User.create(req.body);

        sendMail(
            'site@a.com',
            `${user.email}`,
            `Welcome to ABC system ${user.first_name} ${user.last_name}`,
            `Hi ${user.first_name}, Please confirm your email address`
        );

        const adminMails = await User.find({'role': 'admin'}, {'email': true , "_id": false}).limit(5).lean().exec();

        let mails = [];
        adminMails.forEach( ({ email }) => {
            mails.push(email);
        })

        sendMail(
            'site@a.com',
            mails,
            `${user.first_name} ${user.last_name} has registered with us`,
            `Please welcome ${user.first_name} ${user.last_name}`
        )

        return res.send(user);

    } catch(err){
        res.status(500).send({message: err.message, status: 'failed'});
    }
});

module.exports = router;