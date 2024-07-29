import React, { useContext } from 'react';
import 'swiper/css';
import './MyCssExpertiese.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { myCssExpertieseImages } from '../../assets/strings/strings';
import { themeContext } from '../../Context';

const MyCssExpertiese = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='mycssExpertiese' id='MyCssExpertiese'>
            <span style={{color: darkMode ? 'white' : ''}}>My Expertiese In</span>
            <span>CSS</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='mycssExpertiese-slider'
            >                
                    {
                        myCssExpertieseImages.map((item, k) =>
                            <SwiperSlide>
                                <img src={item.src} alt={item.alt} key={k} />
                            </SwiperSlide>
                        )
                    } 
            </Swiper>
        </div>
    )
};

export default MyCssExpertiese;
