import Express, { response } from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

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

App.put("/people/:person", (request, response) => {
    const name = request.params.person;
    names.push(name);
    response.json({name: name});
});

App.get("/search/:name", (request, response) => {
    let result = {search: "Not Found!"};

    let arrayResult = [];

    names.forEach((value) => {
        if(value.includes.apply(request.params.name)){
            arrayResult.push(value);
        }
    });

    if(arrayResult.length > 0){
        result = {search: arrayResult}
    }

    response.json(result);
});

App.listen(port, () => {
    console.log("Server running...");
});