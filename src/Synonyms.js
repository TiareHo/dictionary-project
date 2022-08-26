import React from "react";

export default function Synonyms(props){
    let synonym=(props.synonyms)
    return (
        <div>
        {synonym.map(function(synonym, index) {
            return (      
              <p key={index}>
                 {synonym}
              </p>
                   );
        })}    
     
     </div>
    )
}