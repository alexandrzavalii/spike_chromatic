import React from 'react';

const Image = ({src, handleChangeImage}) => {

    return (
        <>
         <img src={src} />
         <button onClick={handleChangeImage}> Change Image </button>
        </>
    )
}

export default Image;


