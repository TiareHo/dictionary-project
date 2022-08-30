import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetics);
    if (props.phonetics) {return (
        <span> 
            {props.phonetics.text}
            <a href={props.phonetics.audio} rel="noopener noreferrer" target="_blank">(listen)</a>
        </span>
    );}else{ return null;}
}