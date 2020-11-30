import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Post from './Post'
import { FindPostById } from '../../../notices/NoticeServices';

function SinglePost(props: RouteComponentProps<{ id: string }>) {
    const [postId, setPostId] = useState("")
    const [petId, setpetId] = useState("")
    const [image, setImage] = useState('')
    const [message, setMessage] = useState("")
    const [profileId, setprofileId] = useState("")
    const [timestamp, settimestamp] = useState("")

    const loadPost=async function name(id:string) {
        if(id){
            const result=await FindPostById(id);
            setPostId(result.id!);
            setprofileId(result.profileId!);
            setMessage(result.message!);
            settimestamp(result.timestamp!);
            setpetId(result.petId);
            setImage("d78107e0-332b-11eb-94d0-513186a623ba");
        }
    }

    useEffect(() => {
        const id  = props.match.params.id;
        void loadPost(id);
    },[]);

    return (
        <Post
        petId={petId}
        id={postId}
        image={image}
        message={message}
        profileId={profileId}
        timestamp={timestamp}
        />         
    )
}

export default SinglePost
