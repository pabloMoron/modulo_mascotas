import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import {IPost} from './NoticeServices';

function Feed() {
const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        setPosts([
            // crear servicio fetchStories
            {
                profileId:"5fb7f0e6ea5b1f1634fe704d",
                message:"Odio a los perros, el olor a perro, los pelos de los perros y las babas de los perros",
                petId:"Toni",
                timestamp:"12:00:00",
                id:"1"
            },
            {
                profileId:"5fb7f0e6ea5b1f1634fe704d",
                imageId:"bfb73330-2b4e-11eb-86ba-3724b418dd5b",
                message:"Odio a los perros, el olor a perro, los pelos de los perros y las babas de los perros",
                petId:"Toni",
                timestamp:"12:00:00",
                id:"2"
            }
        ]);       
    }, [])
    return (

        <div className="feed">
            {posts.map(post=>(
                <Post
                profileId={post.profileId}
                id={post.id}
                imageId={post.imageId}
                message={post.message}
                petId={post.petId}
                timestamp={post.timestamp}
                key={post.id}
                />
            ))}
        </div>
    )
}

export default Feed
