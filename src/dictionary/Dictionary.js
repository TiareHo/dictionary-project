import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css"
import SearchResults from "./SearchResults";
import Images from "./pictionary/Images";



export default function Dictionary() {

    const [word, setWord]=useState("");
    const [searchResults, setSearchResults]=useState(null);
    const [imageWord, setImageWord]=useState("");
    const [images, setImages]=useState(null);

    function handleResponse(response) {
        setSearchResults(response.data);
        
    }

    function handleImageResponse(response) {
        setImages(response.data);
    }

    function search(event){
        event.preventDefault();
        let apiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/"+(word);
        axios.get(apiUrl).then(handleResponse);

        let imageApiUrl="https://api.pexels.com/v1/search?query="+(imageWord)+"&per_page=2";
        let imageApiKey="563492ad6f91700001000001aafc849503694b33a1003e0bff10005e";
        let headers={Authorization: `Bearer ${imageApiKey}`};
        axios.get(imageApiUrl, {headers:headers}).then(handleImageResponse);

    }

    function handleWordChange(event){
        setWord(event.target.value);
        setImageWord(event.target.value);
    }

    if (searchResults) {
        
        return (
        <div className="container">
        <h1>Dictionary</h1>
        <p>Look up a word:</p>
        <form onSubmit={search}>
            <input type="search" onChange={handleWordChange}></input>
        </form>
        <SearchResults searchResults={searchResults} />
        <Images images={images} />
        </div>

    );} 
    
        else {
        
        return (
        <div> 
        <div className="container">
        <h1>Dictionary</h1>
        <p>Look up a word:</p>
        <form onSubmit={search}>
            <input type="search" onChange={handleWordChange}></input>
        </form>
        </div>
       
        </div>
    );} 
}