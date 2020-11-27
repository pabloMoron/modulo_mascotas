import React from "react";
import StoryReel from "./StoryReel"
import "./Notices.css";
import Publisher from "./Publisher";
import Feed from "./Feed";

/**
 * La estructura seria la siguiente:
 * {Historias}
 * {Publicacion}
 * {}
 */
export default function Notices() {

    return (<div className="notices">
        <h1>Noticias</h1>
        <StoryReel/> 
        <Publisher/>
        <Feed/>
    </div>);
}

