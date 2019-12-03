import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({title, items}) =>{
    return(
        <div className = 'CollectionPreview' >
            <div className='Title'>
                <h2>{title.toUpperCase()}</h2>
            </div>

            <div className='Preview'> 
                {/* {items.filter((item, idx)=>(idx<4)).map( item => (
                    <div key= {item.id}>{item.name} </div>)
                )} */}
                {
                    items.filter((item,idx)=> (idx<4)).map(({id, ...otherItemProps}) =>
                     (<CollectionItem key={id} {...otherItemProps}/>)
                    )
                }
            </div>
        </div>

    )
}

export default CollectionPreview;