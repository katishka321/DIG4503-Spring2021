import Axios from 'axios';
import {useState} from 'react';

function deleteFunc() {
    const [ISBN, setISBN] = useState("");

    function deleteBook() {
        Axios.delete("http://localhost:45030/books/" + ISBN)

        .then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <input type="text" value={ISBN} onChange = {(event) => setISBN(event.target.value)} placeholder="Enter the ISBN found on the Book..."/>

            <button onClick={() => {deleteBook()}}>Click Here to Delete a Book...</button>

        </div>
    );
}

export default deleteFunc;