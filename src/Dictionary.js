import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {

    const [word, setWord]=useState("");

    function handleResponse(response) {
        console.log(response);
    }

    function search(event){
        event.preventDefault();
        let apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/"+(word);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange(event){
        setWord(event.target.value);
    }

    return (
        <div>
        <h1>Dictionary</h1>
        <p>Look up a word:</p>
        <form onSubmit={search}>
            <input type="search" onChange={handleWordChange}></input>
        </form>
        </div>
    );

}