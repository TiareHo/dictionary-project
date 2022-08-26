import React from "react";
import Meaning from "./Meaning";

export default function SearchResults (props) {
    
    let searchedWord=(props.data[0].word)
    let phonetic=(props.data[0].phonetic)
  
   
  
 
 
   
    if (props.data) { 
        
        return(
        <div>
            <p>{searchedWord}: {phonetic} </p>
            <div>
                    <Meaning meaning={props.data[0].meanings} />
            
            </div>
        </div>
    );} else {return ("Hmmm... try another word.");}
}