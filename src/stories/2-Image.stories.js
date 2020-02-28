import React from 'react';
import Image from '../Image';

export default {
    title: 'Image',
};

export const Img = () => {
    const imgUrl = "https://media.giphy.com/media/xT9IgzUuC5Ss6ZnTEs/source.gif"
    return <Image src={imgUrl} />
}

