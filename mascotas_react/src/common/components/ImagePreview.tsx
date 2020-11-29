import React from 'react'

interface ImagePreviewProps {
    src: string,
    alt:string,
    height:string,
}
export default function ImagePreview(props: ImagePreviewProps) {

    return (
        <div>
            <img src={props.src}
                alt={props.alt}
                height={props.height}
            />
        </div>
    )
}
