const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

const authenticate = require('../middlewares/authenticate');
const { authorise, authoriseSeller } = require('../middlewares/authorise');

router.get('/', async (req, res) => {

    try {

        const products = await Product.find().lean().exec();

        return res.send(products);

    } catch (err) {

        return res.status(500).json({ message: err.message, status: 'Failed' });

    }

});

router.post('/',
    authenticate,
    authorise(['seller', 'admin']),
    async (req, res) => {
        try {
            const product = await Product.create({
                name: req.body.name,
                price: req.body.price,
                image_urls: ["www.imageurl.com`"],
                user: user._id,
            })

            return res.status(201).json({ product });

        } catch (err) {

            return res.status(500).json({ message: err.message, status: 'Failed' });

        }

    });


router.patch('/:id',
    authenticate,
    authoriseSeller(),
    async (req, res) => {
        try {

            const product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).lean().exec();

            return res.json({ product });

        } catch (err) {

            return res.status(500).json({ message: err.message, status: 'Failed' });

        }

    });

router.delete('/:id',
    authenticate,
    authoriseSeller(),
    async (req, res) => {
        try {

            const product = await Product.findByIdAndDelete(req.params.id).lean().exec();

            return res.json({ product });

        } catch (err) {

            return res.status(500).json({ message: err.message, status: 'Failed' });

        }

    });

module.exports = router;

