import React from "react";
import Meaning from "./Meaning";

export default function SearchResults (props) {
    console.log(props.data);
    
    let searchedWord=(props.data[0].word)
    let phonetic=(props.data[0].phonetic)
    let meaning=(props.data.meanings)
   
  
 
 
   
    if (props.data) { return(
        <div>
            <p>{searchedWord}: {phonetic} </p>
            <div>
                    <Meaning meaning={meaning} />
            
            </div>
        </div>
    );} else {return ("Hmmm... try another word.");}
}