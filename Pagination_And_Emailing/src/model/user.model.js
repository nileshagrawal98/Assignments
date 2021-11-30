const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true,},
    email: {type: String, required: true},
    role: {type: String, required: false}
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('user', userSchema);