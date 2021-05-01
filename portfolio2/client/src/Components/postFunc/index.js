import {React, useState} from 'react';
import Axios from 'axios';

function postFunc(){
    const [_id, set_id] = useState("");
    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState("");
    const [directors, setDirectors] = useState("");
    const [writers, setWriters] = useState("");
    const [plot, setPlot] = useState("");

    function addMovie(){
        Axios.put("http://localhost:45030/movies/" + _id,
        {
            title: title,
            genres: genres,
            directors: directors,
            writers: writers,
            plot: plot
        })

        .then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.log("Error " + error);
        })
    }

    return <div>
        <input value={_id} onChange= {(event) => {set_id(event.target.value)}} placeholder = "Enter the Movie ID"/>
        <input value={title} onChange= {(event) => {setTitle(event.target.value)}} placeholder = "Enter the Movie Title"/>
        <input value={genres} onChange= {(event) => {setGenres(event.target.value)}} placeholder = "Enter the Movie Genre"/>
        <input value={directors} onChange= {(event) => {setDirectors(event.target.value)}} placeholder = "Enter the Movie Director(s)"/>
        <input value={writers} onChange= {(event) => {setWriters(event.target.value)}} placeholder = "Enter the Movie Writer(s)"/>
        <input value={plot} onChange= {(event) => {setPlot(event.target.value)}} placeholder = "Enter the Movies Plot here..."/>

        <button onClick={() => {addMovie()}}>Click Here to add Movie</button>
    </div>
}

export default putFunc;