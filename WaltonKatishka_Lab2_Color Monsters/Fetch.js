import axios from 'axios';

/**
 * The 'class' keyword defines a future type of object.
 * 
 * We define its properties and methods.
 * Then, when the 'new' keyword is used, an object is created based on it.
 */

class Fetch {
    /**
     * constructor() is a special method.
     * 
     * When the keyword 'new' is used, it is called.
     * It "constructs" the object through data passed to it.
     */
    constructor(pokemon, color) {
        this.pokemon;
        this.color;
    };

    fetchPokemon() {
         //Fetch this URL
    axios('https://pokeapi.co/')
    //And then...
    .then(function (response) {
        //Use the 'data'
        const pokemon = response.data;

        console.log(chalk.hex("This is a " + pokemon.name + " and its ID is " + pokemon.id));
    })
    .catch(function (error) {
        //handle error
        console.log(chalk.red("Error: " + error));
    })
    };
};