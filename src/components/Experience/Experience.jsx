import React, { useContext } from "react";
import './Experience.css';
import { experienceContent } from "../../assets/strings/strings";
import { themeContext } from "../../Context";

const Expereince = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='experience' id='Experience'>
            {
                experienceContent.map((item, k) => 
                    <div className='achievement' key={k}>
                    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>{item.count}</div>
                    <span>{item.title1}</span>
                    <span>{item.title2}</span>
                </div>
                )                
            }
        </div>
    )
}

export default Expereince;
