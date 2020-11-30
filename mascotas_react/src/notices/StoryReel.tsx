import React, { useEffect } from "react";
import "./StoryReel.css";
import Story from "./Story";

export default function StoryReel() {
    
    function RenderStories(){
        
    }
    
    useEffect(() => {
    }, [])

    return(
    <div className="storyReel">
        <div style={{margin: `auto`, display:`flex`}}>
        <Story avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" Image="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" title="Historia 1"/>
        <Story avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" Image="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" title="Historia 2"/>
        <Story avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" Image="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" title="Historia 3"/>
        <Story avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" Image="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" title="Historia 4"/>
        </div>
    </div>);
}