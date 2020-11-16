import React, { useState } from "react";
import {Avatar} from "@material-ui/core";
import "./Story.css";
interface StoryProps{
    avatar:string,
    profileSrc:string,
    title: string
}

export default function Story(props: StoryProps) {
    
    return (
        <div className="story">
            ASD
            <Avatar src={props.avatar}></Avatar>
            Esta es una historia
        </div>
    )
}
