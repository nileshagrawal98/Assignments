const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (token) =>{
    return new Promise((resolve, reject) =>{
        jwt.verify(token, process.env.JWT_ACCESS_KEY, function(err, token) {
            if(err) {
                return reject(err);
            }
            return resolve(token);
        })
    })
}

const authenticate = async (req, res, next) => {

    // Check if token is present or not
    const bearerToken = req?.headers?.authorization;

    // Check if it's a valid token
    if(!bearerToken || !bearerToken.startsWith('Bearer ')){
        return res.status(400).json({ message: 'Invalid token', status: 'failed'});
    }

    // get actual token value by removing bearer
    const token = bearerToken.split(' ')[1];

    // find user and if present send it back
    let user;
    try{

        user = await verifyToken(token);

    } catch(err){
        return res.status(400).json({ message: 'Invalid Token', status: 'failed' });
    }

    // used not present throw error
    if(!user){
        res.status(400).json({ message: 'Invalid Token', status: 'failed' });
    }

    // return user
    req.user = user;

    return next();
}

module.exports = authenticate;