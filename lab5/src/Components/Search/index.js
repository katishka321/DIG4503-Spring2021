import { useState } from 'react';
import Axios from 'axios';

function Search() {

    //This will track what is being searched for
    const [search, setSearch] = useState("");

    //This will track what is found after being search for
    const [pokemon, setPokemon] = useState({});

    //This will track if the loading is done or not
    const [loading, setLoading] = useState(true);

    // The searchMonster() function uses Axios to commmunicate the PokeAPI.
    // It uses the "search" variable.
    function searchMonsters() {
        //Loading = true
        setLoading(true);

        //Communicate to PokeAPI
        Axios('https://pokeapi.co/api/v2/pokemon/' + search)

            .then(function (response) {
                //Save Pokemon
                setPokemon(response.data);
                //Update Loading
                setLoading(false);
            })

            .catch(function (error) {
                //handle error
                console.log("Error: Not Found!" + error);
            });
    }

    return (
        <div className="Search">
            <input type="text" onChange={(event) => {
                //Update "search" to user input
                setSearch(event.target.value);
            }} />

            <button onClick={() => searchMonsters()}>Search Pokemon</button>

            {
                <p>Searched: {search}</p>
            }

            {
                (loading == true) ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <h2>{pokemon.name}</h2>

                        <p>{pokemon.id}</p>

                        <img src={pokemon.sprites.front_default} />
                    </div>
                )
            }
        </div>
    );
}

export default Search;