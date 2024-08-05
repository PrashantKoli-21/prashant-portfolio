import React, { useEffect, useRef, useState } from 'react';
import './PursuitsCard.css';

const PursuitsCard = ({emoji, heading, content}) => {

    const [isHeartEmoji, setIsHeartEmoji] = useState(false)
    
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;
        if (imageElement) {
            if (imageElement.src.includes('heartemoji.26b1b6ed5e0e44083b28.png')) {
                setIsHeartEmoji(true);
                imageElement.classList.add('is-heartemoji');
                imageElement.classList.remove('is-not-heartemoji');
            } else {
                imageElement.classList.add('is-not-heartemoji');
                imageElement.classList.remove('is-heartemoji');
            }
        }
    }, [emoji]);

    return (
        <div className={`pursuits-card ${isHeartEmoji ? 'heartemoji-parent' : ''}`}>
            <img ref={imageRef} src={emoji} alt='emoji' />
            <span>{heading}</span>
            <span>{content}</span>
            {/* <button className='p-c-button'>LEARN MORE</button> */}
        </div>
    )
}

export default PursuitsCard;