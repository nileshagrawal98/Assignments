const express = require('express');
const router = express.Router();

const Gallery = require('../models/gallery.model');
const upload = require('../middlewares/upload');
// const fs = require('fs');
const deleteFile = require('../middlewares/delete_file');
const path = require('path');


router.get('/', async(req, res) => {
    try{

        const galleries = await Gallery.find().lean().exec();

        return res.send(galleries);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
})

router.post('/', upload.array('pictures', 5),async(req, res) => {
    try{

        const image_paths = req.files.map(file => file.path);

        const gallery = await Gallery.create({
            user_id: req.body.user_id,
            pictures: image_paths
        })

        return res.send(gallery);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});

router.post('/:id/images', upload.array('pictures', 5),async(req, res) => {
    try{

        const image_paths = req.files.map(file => file.path);

        const gallery = await Gallery.findById(req.params.id).lean().exec();

        image_paths.push(...gallery.pictures);

        const updatedGallery = await Gallery.findByIdAndUpdate(req.params.id, {"pictures": image_paths}, {new: true}).lean().exec();

        return res.send(updatedGallery);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});


router.delete('/file', async (req, res) => {
    try{

        const filePath = path.join(__dirname, '../uploads', req.query.fileName);

        deleteFile(filePath);

        let user = await Gallery.findOne({pictures: filePath}, {}).lean().exec();

        let newFilePaths = user.pictures.filter(picture => picture != filePath);

        const gallery = await Gallery.findByIdAndUpdate(user._id, {'pictures': newFilePaths}, {new: true}).lean().exec();

        return res.send(gallery);
    } catch(err) {
        return res.status(500).send({message: err.message, status: 'failed'});
    }
})

module.exports = router;