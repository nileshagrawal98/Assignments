const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: String, required: true }],
}, {
    versionKey: false,
    timestamps: true
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;

    next();
});

userSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {

        bcrypt.compare(password, this.password, function (err, same) {
            if (err) {
                return reject(err)
            };

            return resolve(same);
        });
    });
};



const User = model('user', userSchema);

module.exports = User;