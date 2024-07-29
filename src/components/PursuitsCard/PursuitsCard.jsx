import React, { useEffect, useRef } from "react";
import './PursuitsCard.css';

const PursuitsCard = ({emoji, heading, content}) => {

    const imageRef = useRef(null);

    useEffect(() => {
        // const imageElement = document.querySelector('.pursuits-card img');
        const imageElement = imageRef.current;
        console.log('emoji: ', emoji);
        console.log('imageElement: ', imageElement);
        if (imageElement) {
            if (imageElement.src.includes('http://localhost:3000/static/media/heartemoji.26b1b6ed5e0e44083b28.png')) {
                // imageElement.classList.add('is-heartemoji');
                imageElement.classList.add('is-heartemoji');
                imageElement.classList.remove('is-not-heartemoji');
            } else {
                // imageElement.classList.add('is-not-heartemoji');
                imageElement.classList.add('is-not-heartemoji');
                imageElement.classList.remove('is-heartemoji');
            }
        }
    }, [emoji]);

    return (
        <div className='pursuits-card'>
            <img ref={imageRef} src={emoji} alt='emoji' />
            <span>{heading}</span>
            <span>{content}</span>
            {/* <button className='p-c-button'>LEARN MORE</button> */}
        </div>
    )
}

export default PursuitsCard;