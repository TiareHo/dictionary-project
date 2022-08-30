import React from "react";
import ReactAudioPlayer from "./ReactAudioPlayer";

export default function Phonetic(props) {
    console.log(props.phonetics);
    if (props.phonetics) {return (
        <span> 
            {props.phonetics.text}
            <ReactAudioPlayer src={props.phonetics.audio} autoPlay controls />
       
        </span>
    );}else{ return null;}
}