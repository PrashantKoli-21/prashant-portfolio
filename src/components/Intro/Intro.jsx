import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Intro.css'

import FloatingBlocks from '../FloatingBlocks/FloatingBlocks';

import { buttonTexts, introRightSection, myInterests, myIntro, mySocials } from '../../assets/strings/strings';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';

const Intro = () => {

    const [screenSize, setScreenSize] = useState('default');

    const transition = {duration : 2, type : 'spring'};
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        const updateScreenSize = () => {
          if (window.innerWidth <= 500) {
            setScreenSize('xsmall');
          } else if (window.innerWidth <= 840) {
            setScreenSize('small');
          } else if (window.innerWidth <= 1024) {
            setScreenSize('medium');
          } else if (window.innerWidth <= 1200) {
            setScreenSize('large');
          } else {
            setScreenSize('default');
          }
        };
    
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
    
        return () => window.removeEventListener('resize', updateScreenSize);
      }, []);

    return (
        <div className='i-wrapper'>
            <div className='i-left'>
                <div className='i-name'>
                    {
                        myIntro.map((item, a) => 
                            <span style={{color: (item === 'Hi! I Am' && darkMode) ? 'white' : ''}} key={a}>{item}</span>
                        )
                    }
                </div>
                <div className='i-contact'>
                    <div>
                        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'><button className='button i-button'>{buttonTexts.hireMe}</button></Link>
                    </div>
                    <div className='i-icons'>
                        {
                            mySocials.map((item, k) => 
                            <a href={item.href} target='_blank' key={k}>
                                <img src={item.src} alt={item.alt} />
                            </a>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='i-right'>
                {
                    introRightSection.map((item, e) => 
                        item.animation === 'motion' ? 
                        <motion.img 
                            key={e} 
                            initial={ screenSize === 'default' ? {left: '-36%'} : {left: '-30%'}} 
                            whileInView={{left: '-24%'}} 
                            transition={transition} 
                            src={item.src} 
                            alt={item.alt} 
                        /> : 
                        <img src={item.src} alt={item.alt} key={e} />
                    )
                }
                {
                    myInterests.map((item, k) => 
                        <motion.div
                            className={item.application === 'Web' ? 'web-developer' : 'mobile-developer'} key={k}
                            initial={item.motion === 'left-to-right' ? {top: '-4%', left: '74%'} : {left: '9rem', top: '18rem'}}
                            whileInView={item.motion === 'left-to-right' ? {left: '72%'} : screenSize === 'default' ? {left: '0rem'} : screenSize === 'large' ? {left: '8%'} : screenSize === 'large' ? {left: '17%'} : {left: '23%'}}
                            transition={transition}
                        >
                            <FloatingBlocks
                            image={item.image}
                            application={item.application}
                            dev={item.dev}
                        />
                        </motion.div>
                    )
                }
                <div className='blur' />
                <div className='blur blue' />
            </div>
        </div>
    )
}

export default Intro;
