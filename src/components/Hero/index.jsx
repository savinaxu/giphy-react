import React from 'react';

function Hero(props) {
    return(
        <div>
            <h1>Search For A Gif to Begin</h1>
            {props.children}
        </div>
    )
}

export default Hero
