import React from 'react';
import './CollectionItem.scss';


const CollectionItem = ({imageUrl, name,price}) => {
    console.log(imageUrl)
    return(
        <div className='CollectionItem'> 
            <div className='Image'
             style = {{backgroundImage: `url(${imageUrl})` }}
            /> 
             
            <div className='CollectionFooter'> 
                <span className='Name'> {name}  </span>
                <span className='Price'>{`$${price}`}</span>
            
            </div>
        </div>

    )
}

export default CollectionItem;