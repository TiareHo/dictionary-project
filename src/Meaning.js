import React from "react";

export default function Meaning(props) {
    let definition =(props.meaning[0].definitions[0].definition);
  
    return (
       <div> {definition} </div>
    );
}
