import Express from 'express';
import Database from './database.js';

const App = Express();
const port = 45030;
const d = new Database();

App.use(Express.json());

//Create
App.put("/people/create", (request, response) => {
    //Any JSON values will be part of the req.body!
    //Despite the use of Express.json(), the req.body property does not exist for GET requests.
    //However, the req.query property will contain any URL parameters passed to the path.
    let person = request.body.person;
    d.createOne(person);
    response.json({person: person, body: request.body});
});

//Read
App.get("/people/:person", (request, response) => {
    let person = request.params.person;
    let result = d.readOne(person);
    response.json(reult);
});

App.listen(port, () => {
    console.log("Server is running...");
})