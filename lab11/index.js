import Database from "./database.js";
import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const db = new Database();

db.connect();

App.put("/books/:ISBN", (request, response) => {
    let newISBN = request.params.ISBN;

    let newTitle = request.params.title;

    let newAuthor = request.params.author;

    let newDesc = request.params.description;

    db
        .createOne(newISBN, newTitle, newAuthor, newDesc)
        .then((response) => response.json(response));
});

App.get("/books/:ISBN", (request, response) => {
    let bookSearch = request.params.ISBN;

    db.readOne(bookSearch).then((response) => response.json (response));
});

App.post("/books/search", (request, response) => {
    let urlTitle = request.query.title;

    let urlAuthor = request.query.author;

    db.readMany(urlTitle, urlAuthor).then((response) => response.json(response));
});

App.patch("/books/:ISBN", (request, response) => {
    let updateURL = request.params.ISBN;

    let updateTitle = request.body.title;

    let updateAuthor = request.body.author;

    let updateDesc = request.body.description;

    db
        .updateOne(updateURL, updateTitle, updateAuthor, updateDesc)
        .then((response) => response.json(response));
});

App.delete("/books/:ISBN", (request, response) => {
    let bookDelete = request.params.ISBN;

    db.deleteOne(bookDelete).then((response) => response.json(response));
});

App.listen(port, () => {
    console.log("Server is running...");
});