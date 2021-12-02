const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    try {

        const users = await User.find().lean().exec();

        return res.send(users);

    } catch (err) {
        return res.status(500).send({ message: err.message, status: 'failed' });
    }
});

router.post('/',
    body('first_name').notEmpty().withMessage('first name is required'),
    body('last_name').notEmpty().withMessage('last name is required'),
    body('email').isEmail().withMessage('Proper is required and should be a valid email address'),
    body('pincode').isNumeric().isLength({ min: 6, max: 6 }).withMessage('Proper pincode is required'),
    body('age').custom(value => {
        const regex = new RegExp('^[0-9]+$');
        if (regex.test(value) && value >= 1 && value <= 100) {
            return true;
        }
        throw new Error('Invalid age entered');
    }),
    body('gender').custom(value => {
        if (value === 'Male' || value === 'Female' || value === 'Others') {
            return true;
        }
        throw new Error('Invalid gender entered');
    }),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const newErrors = errors.array().map(({ param, msg }) => {
                return {
                    [param]: msg
                }
            });

            return res.status(400).json({ 'errors': newErrors });
        }

        try {

            const user = await User.create(req.body);

            return res.send(user);

        } catch (err) {
            return res.status(500).send({ message: err.message, status: 'failed' });
        }
    });


module.exports = router;