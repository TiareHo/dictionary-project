import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    let definition =(props.meaning.definitions[0].definition);
    let partOfSpeech=(props.meaning.partOfSpeech);
    let example=(props.meaning.definitions[0].example);
    let synonyms=(props.meaning.synonyms);
  
    return (
       <div className="meaning">
          <em>{partOfSpeech}</em>
          <div> {definition} </div>
          <div>"{example}"</div>

          <div>
               {props.meaning.synonyms.map(function(synonym, index) {
                   return (      
                     <p key={index}>
                        {synonym}
                     </p>
                          );
               })}    
            
            </div>

          <div>{synonyms}</div>
       </div>
    );
}
