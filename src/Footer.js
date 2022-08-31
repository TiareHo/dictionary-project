import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            This is a working project coded by {" "}
            <a href="https://www.linkedin.com/in/tiare-elise/" rel="noopener noreferrer" alt="Tiare">Tiare</a>
            . It is open-sourced via{" "} 
            <a href="https://github.com/TiareHo/dictionary-project" rel="noopener noreferrer" alt="Tiare's GitHub"> GitHub</a> 
            {" "}and hosted on{" "} 
            <a href="https://lambent-gecko-9837c1.netlify.app/" rel="noopener noreferrer" alt="Tiare's Netfily"> Netlify</a>
            . Enjoy!
        </footer>
    );
}