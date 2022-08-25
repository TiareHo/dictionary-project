import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary() {

    const [word, setWord]=useState("");

    function search(event){
        event.preventDefault();
        console.log(word);
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