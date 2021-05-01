import {React, useState} from 'react';
import Axios from 'axios';

function getFunc(){
    const [_id, set_id] = useState("");

    function getMovie(){
        Axios.get("http://localhost:45030/movies/" + _id)
        
        .then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.log("Error " + error);
        })
    }

    return <div>
        <input value={_id} onChange= {(event) => {set_id(event.target.value)}} placeholder = "Search the Movie ID here"/>

        <button onClick={() => {getMovie()}}>Search</button>
    </div>
}

export default getFunc;