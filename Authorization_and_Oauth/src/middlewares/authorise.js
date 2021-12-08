const Product = require('../models/product.model');

const authorise = function ( permittedRoles ) {
    return function (req, res, next) {
        user = req.user.user;

        let isAllowed = false;

        user.roles.map((role) => {
            if(permittedRoles.includes(role)) {
                isAllowed = true;
            }
        });
        if(!isAllowed){
            return res.status(401).json({
                message: "You don't have permission to access this page.",
                status: 'Failed'
            })
        }

        next();
    }
}


const authoriseSeller = function () {

    return async function (req, res, next) {

        user = req.user.user;

        let isAllowed = false;
        
        if(user.roles.includes('admin')){
            isAllowed = true;
            return next();
        }

        const product = await Product.findOne({$and: [{"_id": req.params.id}, {"user": user._id}]}).lean().exec();
        console.log(user._id, req.params.id);
        console.log(product);
        if(product){
            isAllowed = true;
        }

        if(!isAllowed){
            return res.status(401).json({
                message: "You don't have permission to edit this product.",
                status: 'Failed'
            })
        }

        next();
    }
}

module.exports = {authorise, authoriseSeller};