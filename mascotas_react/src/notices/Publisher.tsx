import { Avatar } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import Form from '../common/components/Form'
import './Publisher.css'
import './NoticeServices'
import {FindAvatar} from './NoticeServices'
import ImagePreview from '../common/components/ImagePreview'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import { Link } from 'react-router-dom'

export default function Publisher() {
    const [image, setImage] = useState('/assets/pig_face.ico');
    const [message, setMessage] = useState('')
    const [avatar, setAvatar] = useState('')
    const fileInput = useRef<HTMLInputElement>(null)

    const loadAvatar = async () => {
        try {
            const res = await FindAvatar();
            setAvatar(res);
            console.log("ya seteo el avatar " + res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        void loadAvatar();
    }, [])

    const PreviewImage = (image: string) => { //Viene un url desde el handler de ImagePreview
        setImage(image)
    }

    const HandleSubmit = () => {
        alert('Publishing!!' + message)

        setMessage('');
        setImage('/assets/pig_nose.ico');
    }

    const HandleLive = () => {
        alert('live');
    }

    const imageSelect = () => {
        const files = fileInput.current?.files
        if (files == null) {
            return
        }
        if((files)[0]==null){
            setImage("/assets/pig_nose.ico");
            return
        }
        
        let url = URL.createObjectURL((files)[0]);
        if (url) {
            console.log(url)
            setImage(url)
        }

    }
    const HandlePhoto = () => {
        fileInput.current?.click()
    }

    const HandleVideo = () => {
        alert('VideoStory')
    }

    return (
        <div className="publisher">
            <div className="publisher__top">
                <Avatar src={avatar} />
                <Form>
                    <input
                        className="publisher__input"
                        type="text"
                        placeholder="Muéstranos tu mascota :)"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />
                    <ImagePreview src={image} alt="50" height="50" />
                    <div className="publisher__button">
                        <button type="submit" onClick={HandleSubmit}>
                            Publicar
                    </button>
                    </div>
                </Form>
            </div>

            <div className="publisher__bottom">
                <div className="publisher__option" onClick={HandlePhoto}>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <input type="file"
                        className="upload"
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={fileInput}
                        onChange={imageSelect} />
                    <h3>Foto</h3>
                </div>
                <div className="publisher__option" onClick={HandleVideo}>
                    <VideoLibraryIcon style={{ color: "red" }} />
                    <h3>Video</h3>
                </div>
                    <Link to="/Oops">
                <div className="publisher__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Transmitir en vivo</h3>
                </div>
                    </Link>
            </div>
        </div>
    )
}
