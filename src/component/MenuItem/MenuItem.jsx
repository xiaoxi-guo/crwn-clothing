import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, size, imageUrl}) => {
    console.log(title)
    return(
        <div className = {`${size} MenuItem`}>
        <div 
         className = 'BackgroundImage'
         style = {{backgroundImage: `url(${imageUrl})`}}
        >
        </div>
        <div className = 'Content'>
            <h1 className = 'Title'>{title.toUpperCase()}</h1>
            <span className = 'Subtitle'>Shop Now</span>
        </div>
    </div>
    )
}

export default MenuItem;