//Import Express
import Express from 'express';

//Create an instance of Express
const App = Express();
//Store a port number
const port = 45030;

//
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

//Setup a route
App.get('/people/:person', (request, response) => {
    let person = request.params.person;

    if(names.includes(person)){ //if array names contains the request parameter
        res.json({name:person})
    }
    else{
        res.json({name:"NOT FOUND"});
    }
});

//Set up another route
App.get('/search/:name', (request, response) => {
    const result = names.filter(str => str.includes(request.params.name)); //finds everything in names from request
    
    if(result !=0){ //if array is not empty
        res.json({search: "NOT FOUND!"});
    }
});

//Listen (and start server)
App.listen(port, function(){
    console.log("Server running!");
});