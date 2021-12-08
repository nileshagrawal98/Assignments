const express = require('express');
const app = express();
const connect = require('./configs/db');
const passport = require("./configs/passport");


const userController = require('./controllers/user.controller');
const productController = require('./controllers/product.contoller');
const { register, login } = require('./controllers/auth.controller');
const { body } = require('express-validator');


app.use(express.json());
app.use(passport.initialize());

passport.serializeUser(function ({ user, token }, done) {
    done(null, { user, token });
});

passport.deserializeUser(function (user, done) {
    done(err, user);
});

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["email", "profile"],
    })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/google/failure",
    }),
    function (req, res) {
        return res.status(201).json({ user: req.user.user, token: req.user.token });
    }
);

app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong");
});


app.use('/register',
    body('email').isEmail().withMessage('Proper email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('roles').notEmpty().withMessage('Roles is required'),
    register
);

app.use('/login',
    body('email').isEmail().withMessage('Proper email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    login
);

app.use('/users', userController);
app.use("/products", productController);



const start = async () => {
    await connect();

    return app.listen(2900, () => {
        console.log('Listening on port 2900');
    });
}


module.exports = start;