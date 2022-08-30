import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

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
          <Example example={example}/>


          <Synonyms synonyms={synonyms} />
       </div>
    );
}
