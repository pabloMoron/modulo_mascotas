import React from 'react';
import './Feed.css';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <Post 
            avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" 
            timeStamp="12:00:00" 
            userName="Pelusa" 
            image="/assets/gato.gif"
            message="Odio a los perros, el olor a perro, los pelos de los perros y las babas de los perros"
            pet="Toni"/>
            <Post 
            avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" 
            timeStamp="12:00:00" 
            userName="Pelusa" 
            image="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b"
            message="Hi!!"
            pet="Toni"/>
            <Post 
            avatar="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b" 
            timeStamp="12:00:00" 
            userName="Pelusa" 
            image="http://localhost:3000/v1/image/bfb73330-2b4e-11eb-86ba-3724b418dd5b"
            message="Hi!!"
            pet="Toni"/>

        </div>
    )
}

export default Feed
