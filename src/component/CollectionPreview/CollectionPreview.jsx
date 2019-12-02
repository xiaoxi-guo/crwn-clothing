import React from 'react';
import './CollectionPreview.scss';

const CollectionPreview = ({title, items}) =>{
    return(
        <div className = 'CollectionPreview' >
            <div className='Title'>
                <h1>{title.toUpperCase()}</h1>
            </div>

            <div className='Preview'> 
                {items.filter((item, idx)=>(idx<4)).map( item => (
                    <div key= {item.id}>{item.name} </div>)
                )}
            </div>
        </div>

    )
}

export default CollectionPreview;