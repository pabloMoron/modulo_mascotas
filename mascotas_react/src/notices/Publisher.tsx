import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Form from '../common/components/Form'
import FormAcceptButton from '../common/components/FormAcceptButton'
import ImageUpload from '../common/components/ImageUpload'
import './Publisher.css'
import './NoticeServices'
import FindAvatar from './NoticeServices'

export default function Publisher() {
    const [image, setImage] = useState('/assets/profile.png');
    const [message, setMessage] = useState('')
    const [avatar, setAvatar]=useState('')

    const loadAvatar=async()=>{
        try{
            const res = await FindAvatar();
            setAvatar(res);
            console.log("ya seteo el avatar "+res)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
       void loadAvatar();
    }, [])

    const PreviewImage=(image: string)=>{ //Viene un base64 desde el handler de ImageUpload
        setImage(image)
    }

    const Publish=()=>{

    }

    return (
        <div className="publisher">
            <div className="publisher__top">
                <Avatar src={avatar}/>
                <Form >
                    <input 
                    type="text"
                    placeholder="Publica tu mascota!"
                    />
                    <ImageUpload src={image} onChange={PreviewImage}/>
                    <FormAcceptButton label="Publicar" onClick={Publish} />
                </Form>
            </div>
        </div>
    )

}
