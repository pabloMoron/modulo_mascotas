import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, Pets, Share, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'

interface PostProps {
    avatar: string;
    userName: string;
    timeStamp: string;
    image: string;
    message: string;
    pet:string;
}

function Post(props: PostProps) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={props.avatar} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{props.userName}</h3>
                    <p>{props.timeStamp}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{props.message}</p>
            </div>

            <div className="post__image">
                <img src={props.image} />
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
                    <p>{props.pet}</p>
                </div>
            </div>
        </div>

    )
}

export default Post
