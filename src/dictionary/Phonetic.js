import React from "react";
import ReactAudioPlayer from "./ReactAudioPlayer";

export default function Phonetic(props) {
    
    if (props.phonetics) {return (
        <span> 
            {props.phonetics.text}&nbsp;&nbsp;
            <ReactAudioPlayer src={props.phonetics.audio} autoPlay controls />
       
        </span>
    );}else{ return null;}
}