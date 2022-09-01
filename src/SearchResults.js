import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";




export default function SearchResults (props) {
   
    
    let searchedWord=(props.searchResults[0].word);

 if (props.searchResults) { 
        return(
       <div>
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
              <button>pictionary↗</button>
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
        <footer className="search-results-footer">
            This is a working project coded by {" "}
            <a href="https://www.linkedin.com/in/tiare-elise/" rel="noopener noreferrer" alt="Tiare">Tiare</a>
            . It is open-sourced via{" "} 
            <a href="https://github.com/TiareHo/dictionary-project" rel="noopener noreferrer" alt="Tiare's GitHub"> GitHub</a> 
            {" "} and hosted on{" "} 
            <a href="https://lambent-gecko-9837c1.netlify.app/" rel="noopener noreferrer" alt="Tiare's Netfily"> Netlify</a>
            . Enjoy! 
        </footer>
    </div> 
    );} else {return ("Hmmm... try searching another word.");}
}