import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () => {
    return(
        <div className='Header'>
            <Link className='LogoContainer'>
                <Logo/>
            </Link>

            <div className='OptionContainer'>
                <Link className='Option'>SHOP</Link>
                <Link className='Option'>CONTACT</Link>
            </div>
        </div>

    )
}
export default Header;