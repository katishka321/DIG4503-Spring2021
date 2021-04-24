import Axios from 'axios';
import {useState} from 'react';

function getFunc() {
    const [searchBooks, setSearchBooks] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getBookTitle = (title) => {
        Axios.get("http://localhost45030:search/books/" + title)

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
            <input type="text" onChange={(event) => setSearchBooks (event.target.value)}/>

            <button onClick={() => getBookTitle(searchBooks)}>Search Book Title Name Here...</button>

            {
                searchResults.map((value, index) => {
                    return <p key={index}>{value}</p>
                })
            }
        </div>
    );
}

export default getFunc;