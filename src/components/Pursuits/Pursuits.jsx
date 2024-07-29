import React, { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import './Pursuits.css';

import PursuitsCard from "../PursuitsCard/PursuitsCard";

import MyResume from '../../assets/files/MyResume.pdf';
import { pursuitCards, pursuitsTexts } from "../../assets/strings/strings";
import { themeContext } from "../../Context";

const Pursuits = () => {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration : 1, type: 'spring'};

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getDynamicStyle = (heading) => {
        let style = {};
        console.log(`Viewport Width: ${viewportWidth}`);
        console.log(`Viewport Width: ${heading}`);
        if (heading === 'Front-End Development') {
            if(viewportWidth <= 1350 && viewportWidth >= 1151) {
            style.left = '7rem';
            } else if(viewportWidth <= 1150 && viewportWidth > 1024) {
                style.left = '2rem';
            } else if(viewportWidth <= 1024 && viewportWidth > 490) {
                style.left = '9rem';
            } else if(viewportWidth <= 490) {
                style.left = '7rem';
            } else {
                style.left = '14rem';
            }
        } else if (heading === 'Databases') {
            if(viewportWidth <= 1150 && viewportWidth > 1024) {
                style.top = '12rem';
                style.left = '-7rem';
            } else if(viewportWidth <= 700 && viewportWidth > 490) {
                style.left = '-6rem';
                // style.left = '-7rem';
            } else if(viewportWidth <= 490) {
                style.left = '-3rem';
                // style.left = '-7rem';
            } else {
            style.top = '12rem';
            style.left = '-11rem';
            }
        } else if (heading === 'Testing Tools') {
            if(viewportWidth <= 1150 && viewportWidth > 1024) {
                style.top = '19rem';
                style.left = '4rem';
            } else if (viewportWidth <= 1024 && viewportWidth > 490) {
                style.left = '9rem';
            } else if(viewportWidth <= 490) {
                style.left = '7rem';
            } else {
                style.top = '19rem';
                style.left = '12rem';
            }
        }
        console.log('style: ', style);
        return style;
    };

    return (
        <div className='pursuits' id='Pursuits'>
            <div className='p-left'>
                <span style={{color: darkMode ? 'white' : ''}}>{pursuitsTexts.myPassionate}</span>
                <span>{pursuitsTexts.pursuits}</span>
                <span>
                    {pursuitsTexts.strongPassion}
                    <br/>
                    {pursuitsTexts.skills}
                </span>
                <a href={MyResume} download>
                    <button className='button p-button'>Download CV</button>
                </a>
                <div className='blur p-blur1'></div>
            </div>
            <div className='p-right'>
                {
                    pursuitCards.map((item, k) => 
                        <motion.div
                            key={k}
                            className={item.heading === 'Front-End Development' ? 'frontendDevelopment' : item.heading === 'Databases' ? 'databases' : 'testingTools'}
                            whileInView={getDynamicStyle(item.heading)}
                            initial={ ((viewportWidth <= 1150 || viewportWidth <= 1024)  && item.heading === 'Testing Tools') ? {top: '19rem'} : item.initial}
                            transition={transition}
                        >
                            <PursuitsCard
                                emoji={item.emoji}
                                heading={item.heading}
                                content={item.content}
                             />
                        </motion.div>
                    )
                }
                {/* {
                    pursuitCards.map((item, k) => 
                        <motion.div
                            key={k}
                            style={getDynamicStyle(item.heading)}
                            // className={}
                            whileInView={item.whileInView}
                            initial={item.initial}
                            transition={transition}
                        >
                            <PursuitsCard
                                emoji={item.emoji}
                                heading={item.heading}
                                content={item.content}
                             />
                        </motion.div>
                    )
                } */}
                <div className='blur p-blur2'></div>
            </div>
        </div>
    )
}

export default Pursuits;
