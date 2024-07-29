import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './MyLearnings.css';
import { buttonTexts, myLearningsImages, myLearningsTexts } from '../../assets/strings/strings';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';

const MyLearnings = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='mylearnings'>
        <div className='p-left m-left'>
                <span style={{color: darkMode ? 'white' : ''}}>{myLearningsTexts.myLearnings}</span>
                <span>{myLearningsTexts.frontendDevelopment}</span>
                <span>{myLearningsTexts.content}</span>                
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className='button p-button'>{buttonTexts.hireMe}</button>
                </Link>                
                <div className='blur p-blur1' />
            </div>
            <div className='m-right'>
                <motion.div
                    className='m-mainCircle'
                    initial={{rotate: 45}}
                    whileInView={{rotate: 0}}
                    viewport={{margin: '-40px'}}
                    transition={{duration: 3.5, type: 'spring'}}
                >
                    {
                        myLearningsImages.map((item, k) => 
                            <div className='m-secCircle'>
                                <img src={item.src} alt={item.alt} />
                            </div>
                        )
                    }
                </motion.div>
                <div className='m-backCircle blueCircle' />
                <div className='m-backCircle yellowCircle' />
            </div>
        </div>
    )
};

export default MyLearnings;
