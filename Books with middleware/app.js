const express = require('express');
const app = express();
const books = require('./books.json');

app.use(express.json());

app.get("/", (req, res) => {
    return res.send(books);
});

app.post("/books", (req, res) => {
    const newBooks = [...books, req.body];
    return res.send(newBooks);
});

app.get("/books/:id", (req, res) => {
    const book = books.filter( b => b.id == req.params.id);
    return res.send(book);
});

app.patch("/books/:id", (req, res) => {
    const newBooks = books.map(book => {
        if(book.id == req.params.id){
            if(req?.body?.title) book.title = req.body.title;

            if(req?.body?.author) book.author = req.body.author;

            if(req?.body?.published) book.published = req.body.published;

            if(req?.body?.pages) book.pages = req.body.pages;
        }
        return book;
    });
    return res.send(newBooks);
});

app.delete("/books/:id", (req, res) => {
    const newBooks = books.filter( book => book.id != req.params.id);

    return res.send(newBooks);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});