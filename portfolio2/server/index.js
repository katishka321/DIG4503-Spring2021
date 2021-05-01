import Database from "./Database.js";
import Express from "express";
import CORS from "cors";

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const myDatabase = new Database();

myDatabase.connect()

App.put("/movies/:_id", (request, response) => {
    console.log("/movies/:_id");

    const _id = request.params._id;
    const body = request.body;
    const response = myDatabase.createOne(_id, body);

    response.then((data) => response.json({"movie": data}))
});

App.get("/movies/:_id", (request, response) => {
    console.log("/movies/:_id");

    const _id = request.params._id;
    const response = (myDatabase.readOne(_id));

    response.then((data) => {
        if (data == null) {
            data = "Not Found Please Try Again"
        };

        const response = {"movie": data};

        response.json(response);
    });
});

App.get("/movies/search/:query", (request, response) => {
    console.log("/movies/search/:query");

    var response = myDatabase.movieSearch(query);

    response = response.toArray();

    response.then((data) => {
        if (data == null) {
            data = []
        };
    
    const response = {"movie": data};

    response.json(response);
    });
});

App.delete("/movies/:_id", (request, response) => {
    console.log("/movies/_id");

    const _id = request.params._id;
    const response = myDatabase.deleteOne(_id);

    response.then((data) => response.json({"count": data.deleteCount}))

});

App.listen(port, function(){
    console.log("Server is running...");
});
