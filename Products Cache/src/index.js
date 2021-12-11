const express = require('express');
const app = express();
const connect = require('./configs/db');

app.use(express.json());

const productController = require('./controllers/product.controller');

app.use('/products', productController);



const start = () => app.listen(3000, async () =>{
    await connect();
    console.log('Listening on port 3000');
});

module.exports = start;