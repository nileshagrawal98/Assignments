const express = require('express');
const router = express.Router();

const User = require('../models/user.model');
const upload = require('../middlewares/upload');
const Gallery = require('../models/gallery.model');
const deleteFile = require('../middlewares/delete_file');


router.get('/', async (req, res) => {
    try{

        const users = await User.find().lean().exec();

        return res.send(users);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});

router.post('/', upload.single('profile_pic'),async (req, res) => {
    try{

        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path
        })

        return res.send(user);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});

router.patch('/:id', upload.single('profile_pic'),async (req, res) => {
    try{

        let user;

        // If profile pic is also updated then old pic will be deleted from server.
        if(req.file !== undefined){

            let userProfilePic = await User.findById(req.params.id, {'profile_pic':true}).lean().exec();
            deleteFile(userProfilePic.profile_pic);

            user = await User.findByIdAndUpdate(req.params.id ,{
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                profile_pic: req.file.path
            }, {new: true}).lean().exec();

        }else{
            user = await User.findByIdAndUpdate(req.params.id ,{
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            }, {new: true}).lean().exec();
        }

        return res.send(user);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
})

router.delete('/:id', async (req, res) => {
    try{

        // Delete gallery and all images(from server) for selected user
        const gallery = await Gallery.findOne({'user_id': req.params.id}, {}).lean().exec();
        
        gallery.pictures.forEach(filePath => deleteFile(filePath));

        Gallery.findByIdAndDelete(gallery._id).lean().exec();


        // Delete user and profile pic(from server) for selected user
        const user = await User.findById(req.params.id).lean().exec();

        deleteFile(user.profile_pic);
        
        User.findByIdAndDelete(req.params.id).lean().exec();


        return res.send(user);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
})


module.exports = router;