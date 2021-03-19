import Axios from 'axios';
import {useState} from 'react';

function getFunc() {
    const [searchNames, setSearchNames] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getPeople = (name) => {
        Axios.get("http://localhost45030:/search/" + name)
        
        .then(response => {
            console.log(response.data);
            setSearchResults(response.data.search);
        })

        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <input type="text" onChange={(event) => setSearchNames(event.target.value)} />

            <button onClick={() => getPeople(searchNames)}>Search Name Here!</button>

            {
                searchResults.map((value, index) => {
                    return <p key={index}>{value}</p>
                })
            }
        </div>
    );
}

export default getFunc;