import React from 'react';

function GifItems({ id, title, imgUrl }) {
    return (
        <div  className="card" id={id} >
            <div className="img-container">
                <img src={imgUrl} alt={title} />
            </div>
        </div>
    )
}

export default GifItems