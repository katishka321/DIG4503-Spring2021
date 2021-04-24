import Axios from 'axios';
import {useState} from 'react';

function putFunc() {
    const [ISBN, setISBN] = useState("");
    const [title, setISBN] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    function addNewBook() {
        Axios.put("http://localhost:45030/books/" + ISBN,{
            title: title,
            author: author,
            description: description
        })

        .then(response => {
            console.log(response.data);
        })

        .catch(error => {
            console.log("Error " + error);
        });
    };

    return (
        <div>
            <input type="text" value={ISBN} onChange = {(event) => setISBN(event.target.value)}/>

            <input type="text" value={title} onChange = {(event) => setTitle(event.target.value)}/>

            <input type="text" value={author} onChange = {(event) => setAuthor(event.target.value)}/>

            <input type ="text" value={description} onChange = {(event) => setDescription(event.target.value)} placeholder="Enter the book description here..."/>

            <button onClick={() => {addnNewBook()}}>Click Here to Add a New Book...</button>

        </div>
    );
}

export default putFunc;