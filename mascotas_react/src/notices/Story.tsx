import React, { useState } from "react";
import {Avatar} from "@material-ui/core";
import "./Story.css";
interface StoryProps{
    avatar:string,
    Image:string,
    title: string
}

export default function Story(props: StoryProps) {
    
    return (
        <div className="story" style={{backgroundImage:`url(${props.Image})`}}>
            <Avatar src={props.avatar} className="story__avatar"/>
            <h4>{props.title}</h4>
        </div>
    )
}
