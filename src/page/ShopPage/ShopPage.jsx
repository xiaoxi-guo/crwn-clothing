import React from 'react';
import ShopData from './ShopData';
import './ShopPage.scss';

import CollectionPreview from '../../component/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections : ShopData
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='ShopPage'>
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key = {id} {...otherCollectionsProps} />
                    ))
                }
            </div>
            )

    }
}

export default ShopPage;