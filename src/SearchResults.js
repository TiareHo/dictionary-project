import React from "react";
import Meaning from "./Meaning";


export default function SearchResults (props) {
    console.log(props.searchResults);
    
    let searchedWord=(props.searchResults[0].word)
    let phonetic=(props.searchResults[0].phonetic)
   
    
        
    

    if (props.searchResults) { 
       
        return(
        <div>
            <p>{searchedWord}: <span>{phonetic}</span> </p>
            <div>
               {props.searchResults[0].meanings.map(function(meaning, index) {
                   return (      
                     <div key={index}>
                        < Meaning meaning={meaning} />
                     </div>
                          );
               })}    
            
            </div>
        </div>
    );} else {return ("Hmmm... try another word.");}
}