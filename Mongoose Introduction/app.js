const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const movieSchema = new mongoose.Schema({
    movie_name: {type: String, required: true},
    movie_genre: {type: String, required: false},
    production_year: {type: String, required: false, default: 2021},
    budget: {type: Number, required: false}
}, {
    versionKey: false,
    timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

app.get('/movie', async (req, res) => {
    try{

        const movies = await Movie.find().lean().exec();

        return res.send(movies);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});

app.get('/movie/:id', async (req, res) => {
    try{

        const movie = await Movie.findById(req.params.id).lean().exec();

        return res.send(movie);

    } catch (err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }
});

app.post('/movie', async (req, res) => {

    try{

        const movie = await Movie.create(req.body);

        return res.status(201).send(movie);

    } catch (err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});

app.patch('/movie/:id', async (req, res) => {

    try{

        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.send(movie);

    } catch (err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});

app.delete('/movie/:id', async (req, res) => {

    try{

        const movie = await Movie.findByIdAndDelete(req.params.id);

        return res.send(movie);

    } catch (err){

        console.log(err.message);

        return res.status(500).send({message: err.message, status: 'failed'});
    }

})

app.listen(2900, async (req, res) => {
    await connect();

    console.log("Listening on port 2900");
})