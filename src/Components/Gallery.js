import React from 'react';

const Gallery = function(props) {
    return(
        <div className="Gallery">
        {
            props.images.Foreach(i =>{
                <img src={i}/>
            })
        }
        </div>
    );
};

export default Gallery;