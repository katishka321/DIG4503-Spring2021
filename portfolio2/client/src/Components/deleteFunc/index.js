import {React, useState} from 'react';
import Axios from 'axios';

function deleteFunc(){
    const [_id, set_id] = useState("");

    function deleteMovie(){
        Axios.delete("http://localhost:45030/movies/" + _id)

        .then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.log("Error " + error);
        })
    }

    return <div>
        <input value={_id} onChange= {(event) => {set_id(event.target.value)}} placeholder = "Enter the Movie ID"/>

        <button onClick={() => {deleteMovie()}}>Click Here to delete Movie</button>
    </div>
}

export default deleteFunc;