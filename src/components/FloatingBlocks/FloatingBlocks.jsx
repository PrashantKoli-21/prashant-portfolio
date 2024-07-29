import React from 'react';
import './FloatingBlocks.css';

const FloatingBlocks = ({image, application, dev}) => {

    return (
        <div className='floatingBlocks'>
            <div className='boyImage'>
                <img src={image} alt='application image' />
            </div>
            <div className='applicationDeveloper'>
            <span>
                {application}
                <br/>
                {dev}
            </span>
            </div>
        </div>
    )
}

export default FloatingBlocks;
