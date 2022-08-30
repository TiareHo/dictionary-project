import React from "react";
import "./ReactAudioPlayer.css";

export default function ReactAudioPlayer(props) {

    function playAudio(event) {
        const audioElement = new Audio(props.src);
            audioElement.play();
    }

    if (props.src) {return(
        <button onClick={playAudio}>🔈</button>
    );}else {return null;}
}