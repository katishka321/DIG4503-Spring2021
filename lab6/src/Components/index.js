//Import Express
import Express from "express";

//Create an instance of Express
const App = Express();

//Store a port number
const port = 45030;

//Provide first name and favorite color
const objectExample = {
    firstName: "Katishka",
    color: red
}

//Setup a route
    App.get("/", function (request, response){
        response.send("Hello World!");
    });

    App.get("/", function (request, response){
        res.json(objectExample);
    });

App.listen(port, function(){
    console.log("Server running!");
});