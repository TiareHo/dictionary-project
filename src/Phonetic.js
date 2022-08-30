import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetics);
    if (props) {return (
        <span> 
            {props.phonetics.text}
            <a href={props.phonetics.audio} alt="pronunciation" rel="refererrer noopener">audio</a>
        </span>
    );}else{ return null;}
}