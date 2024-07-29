import React from 'react';
import './Footer.css';

import GitHub from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';

import Wave from '../../assets/imagesAndIcons/wave.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src={Wave} alt='wave' style={{width: '100%'}}/> 
            </div>
            <div className='f-content'>
                <span>prashant.kumar.koli@gmail.com</span>
                <div className='f-icons'>
                    {/* <Insta color='white' size='3rem' /> */}
                    <GitHub color='white' size='3rem' />
                    <LinkedIn color='white' size='3rem' />
                </div>
            </div>           
        </div>
    )
};

export default Footer;
