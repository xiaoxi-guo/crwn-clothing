import React from 'react';
import './MenuItem.scss';
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, size, imageUrl, linkUrl, history, match}) => {
    console.log(match.url)
    console.log(linkUrl)
    return(
        <div className = {`${size} MenuItem`} 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
        >
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

export default withRouter(MenuItem);