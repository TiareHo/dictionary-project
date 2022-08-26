import React from "react";

export default function SearchResults (props) {
    console.log(props.data);
    
    let searchedWord=(props.data.word)
    let phonetic=(props.data.phonetic)
    let partOfSpeech=(props.data.meanings[0].partOfSpeech)
    let definition=(props.data.meanings[0].definitions[0].definition)
 
 
   
    if (props.data) { return(
        <div>
            <p>{searchedWord}: {phonetic} {partOfSpeech} {definition}</p>
        </div>
    );} else {return ("Hmmm... try another word.");}
}