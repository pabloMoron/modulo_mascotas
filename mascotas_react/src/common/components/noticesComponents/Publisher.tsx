import { Avatar } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import './Publisher.css'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import { Link } from 'react-router-dom'
import { FindAvatar, IPost, UploadPost } from '../../../notices/NoticeServices';
import { Pet, loadPets } from '../../../pets/petsService';
import Form from '../Form';
import ImagePreview from '../ImagePreview';

export default function Publisher() {
    const [image, setImage] = useState('/assets/pig_face.ico');
    const [message, setMessage] = useState('')
    const [avatar, setAvatar] = useState('')
    const [petId, setPetId] = useState('5fb7f123ea5b1f1634fe704e')
    const [pets, setPets] = useState<Pet[]>([])
    const [postedImage, setPostedImage] = useState('');
    const fileInput = useRef<HTMLInputElement>(null)

    const loadAvatar = async () => {
        try {
            const res = await FindAvatar();
            setAvatar(res);
        } catch (error) {
            console.log(error)
        }
    }

    const loadCurrentPets = async () => {
        try {
            const resultPets = await loadPets();
            setPets(resultPets);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        void loadAvatar();
        void loadCurrentPets();
    }, [])

    const HandleSubmit = async () => {
        alert('Publishing!!' + message)
        try {
            const payload: IPost = {
                petId: petId,
                message: message,
            }
            if (postedImage != "") payload.image = postedImage;
            await UploadPost(payload);
            window.location.reload();
        } catch (error) {
            alert(error)
        }
    }

    const imageSelect = () => {
        const files = fileInput.current?.files
        if ((files) == null || (files)[0] == null) {
            setImage("/assets/pig_nose.ico");
            setPostedImage("");
            return
        } else {
            let imageBase64;
            const reader = new FileReader()
            reader.readAsDataURL((files)[0])
            reader.onload = () => {
                imageBase64 = (reader.result as string)
                setPostedImage(imageBase64);
            }
        }
        let url = URL.createObjectURL((files)[0]);
        if (url) {
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

            <div className="publisher__petSelector">
                <label>Mascota</label>
                <select
                    value={petId}
                    onChange={e => setPetId(e.target.value)}
                >
                    {pets.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
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
