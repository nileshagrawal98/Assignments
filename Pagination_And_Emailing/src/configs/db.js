const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect('mongodb+srv://nilesh98:nilesh98@practice.gyfvs.mongodb.net/test')
}