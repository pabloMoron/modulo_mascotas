import React from "react";
import "./Notices.css";
import Feed from "../common/components/noticesComponents/Feed";
import Publisher from "../common/components/noticesComponents/Publisher";
import StoryReel from "../common/components/noticesComponents/StoryReel";

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

