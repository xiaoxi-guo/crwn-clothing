import React from 'react';
import './CustomButton.scss';


const CustomButton = ({children, ...otherProps}) => {
    console.log(children)
    return(
        <button className='CustomButton' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;