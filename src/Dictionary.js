import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import SearchResults from "./SearchResults";

export default function Dictionary() {

    const [word, setWord]=useState("");
    const [searchResults, setSearchResults]=useState(null);

    function handleResponse(response) {
        setSearchResults(response.data);
    }

    function search(event){
        event.preventDefault();
        let apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/"+(word);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleWordChange(event){
        setWord(event.target.value);
    }

    if (searchResults) {return (
        <div>
        <h1>Dictionary</h1>
        <p>Look up a word:</p>
        <form onSubmit={search}>
            <input type="search" onChange={handleWordChange}></input>
        </form>
        <SearchResults data={searchResults} />
        </div>
    );} else {return (
        <div>
        <h1>Dictionary</h1>
        <p>Look up a word:</p>
        <form onSubmit={search}>
            <input type="search" onChange={handleWordChange}></input>
        </form>
        </div>
    );} 
}