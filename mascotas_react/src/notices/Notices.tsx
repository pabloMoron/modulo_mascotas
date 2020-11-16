import React from "react";
import StoryReel from "./StoryReel"
import "./Notices.css";

/**
 * La estructura seria la siguiente:
 * {Historias}
 * {Publicacion}
 * {}
 */
export default function Notices() {

    return (<div className="feed">
        <h1>Noticias</h1>
        <StoryReel/>
    </div>);
}