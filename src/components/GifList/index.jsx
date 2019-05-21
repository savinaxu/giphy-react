import React from 'react';
import GifItems from '../GifItems'

function GifList(props) {
    let gifItems
    if (props.gifs.length) {
        gifItems = (
            <div className="card-list">
                {props.gifs.map(gif => (
                    <GifItems 
                        key={gif.id}
                        id={gif.id}
                        title={gif.title}
                        imgUrl={gif.images.fixed_width.url}
                    />
                ))}
            </div>
        )
    }

    return (
        <div>{gifItems}</div>
    )
}

export default GifList