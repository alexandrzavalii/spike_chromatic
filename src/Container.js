import React from 'react';
import Image from "./Image";


const imgSrc = [
    'https://media.giphy.com/media/xT9IgzUuC5Ss6ZnTEs/source.gif',
    'https://media.giphy.com/media/X8mtsz8N5CBGv4WSgr/source.gif',
    'https://media.giphy.com/media/dCXrEbqBS5NxZNptrK/source.gif'
]

const Container  = () => {
    const imgUrl = "https://media.giphy.com/media/xT9IgzUuC5Ss6ZnTEs/source.gif";

    const handleClick = () => {
        alert("CLICKED ME")
    }

    return <Image src={imgUrl} handleChangeImage={handleClick} />
}


export default Container;
