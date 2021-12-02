const express = require('express');
const app = express();
const connect = require('./configs/db');
const userController = require('./controllers/user.controller');

app.use(express.json());
app.use('/user', userController);

const start = async () => {
    await connect();

    app.listen(2900, async (req, res) => {
        console.log('Listening on port 2900');
    });
}

module.exports = start;