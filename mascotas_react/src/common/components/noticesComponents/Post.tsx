import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, Pets, Share, ThumbUp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import { IPost } from '../../../notices/NoticeServices'
import { environment } from '../../../app/environment/environment'
import { loadPet } from '../../../pets/petsService'
import { getCurrentProfile } from '../../../profile/profileService'

function Post(props: IPost) {
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [petName, setPetName] = useState("")
    const [image, setImage] = useState("")
    const [localTimestamp, setLocalTimestamp] = useState("")
    
    const loadProfile = async () => {
        try{
            const profileResult = await getCurrentProfile();
            setName(profileResult.name);
            setAvatar(environment.backendUrl+'/v1/image/'+profileResult.picture);
        }catch(error){
            console.log(error);
        }
    }

    const loadImage = async ()=>{
        try {
            if(props.image) {
                let postedImage=environment.backendUrl+'/v1/image/'+props.image;
                setImage(postedImage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const findPet = async () =>{
        try {
            const petResult=await loadPet(props.petId);
            setPetName(petResult.name);   
        } catch (error) {
            console.log(error)
        }
    }

    const fixDateTime=()=>{
        if(props.timestamp){
            let localDate=new Date(props.timestamp);
            setLocalTimestamp(localDate.toString());
        }
    }

    useEffect(() =>  {
        void loadProfile();
        void findPet();
        void fixDateTime();
        if(props.image)
        void loadImage();
    }, [])

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={avatar} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{name}</h3>
                    <Link to={`/posts/${props.id}`}>{localTimestamp}</Link>
                </div>
            </div>

            <div className="post__bottom">
                <p>{props.message}</p>
            </div>

            <div className="post__image">
                <img src={image} />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp/>
                    <p>Me gusta!</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline/>
                    <p>Comentar</p>
                </div>
                <div className="post__option">
                    <Share/>
                    <p>Compartir</p>
                </div>
                <div className="post__option">
                    <Pets/>
                    <p>{petName}</p>
                </div>
            </div>
        </div>

    )
}

export default Post