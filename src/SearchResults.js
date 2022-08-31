import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";




export default function SearchResults (props) {
    console.log(props.searchResults);
    
    let searchedWord=(props.searchResults[0].word);

 if (props.searchResults) { 
        return(
        <div className="container">
            <div className="results">
                <h3>{searchedWord}: </h3>
              <div>
               {props.searchResults[0].phonetics.map(function(phonetics, index){
                return (
                    <span key={index}>
                      <Phonetic phonetics={phonetics} />
                    </span>
                );
             })}
              </div> 
             </div>

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
    );} else {return ("Hmmm... try searching another word.");}
}