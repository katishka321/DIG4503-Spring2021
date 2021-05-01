import {React, useState} from 'react';
import Axios from 'axios';

function movieSearch(){
    const [value, setValue] = useState("");

    function searchFunc(){
        Axios.get("http://localhost:45030/movies/search" + value)

        .then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.log("Error " + error);
        })
    }

    return <div>
        <input value={value} onChange={(event) => {setValue(event.target.value)}} placeholder = "Search Movie Title Here"/>

        <button onClick={() => {searchFunc()}}>Search</button>
    </div>
}

export default movieSearch;