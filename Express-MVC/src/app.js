const express = require('express');
const app = express();

app.use(express.json());

const connect = require('./configs/db.js');

const userController = require('./controller/user.controller');
const topicController = require('./controller/topic.controller');
const studentController = require('./controller/student.controller');
const evaluationController = require('./controller/evaluation.controller');

app.use('/user', userController);
app.use('/topic', topicController);
app.use('/student', studentController);
app.use('/evaluation', evaluationController);

app.listen(2900, async () => {
    await connect();
    console.log('Listening on porrt 2900');
})