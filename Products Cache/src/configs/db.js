const mongoose = require('mongoose');

const connect = () => mongoose.connect('mongodb://localhost:27017/products_cache');

module.exports = connect;