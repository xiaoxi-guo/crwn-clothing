import React from 'react';
import './HomePage.scss'

export const HomePage = () => {
    return(
        <div className = 'HomePage'>
            <div className = 'DirectoryMenu'>
                <div className = 'MenuItem'>
                    <div className = 'Content'>
                        <h1 className = 'Title'>Hats</h1>
                        <span className = 'Subtitle'>Shop Now</span>
                    </div>
                </div>

                <div className = 'MenuItem'>
                    <div className = 'Content'>
                        <h1 className = 'Title'>Jackets</h1>
                        <span className = 'Subtitle'>Shop Now</span>
                    </div>
                </div>

                <div className = 'MenuItem'>
                    <div className = 'Content'>
                        <h1 className = 'Title'>Women</h1>
                        <span className = 'Subtitle'>Shop Now</span>
                    </div>
                </div>

                <div className = 'MenuItem'>
                    <div className = 'Content'>
                        <h1 className = 'Title'>Man</h1>
                        <span className = 'Subtitle'>Shop Now</span>
                    </div>
                </div>

                <div className = 'MenuItem'>
                    <div className = 'Content'>
                        <h1 className = 'Title'>Baby</h1>
                        <span className = 'Subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}