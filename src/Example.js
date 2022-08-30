import React from "react";

export default function Example(props) {
    if (props.example) {return (
        <div>
            <strong>example: </strong><em>{props.example}</em>  
        </div>
    );}else {
        return null;
    }
}