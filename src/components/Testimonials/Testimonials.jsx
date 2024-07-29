import React from 'react';
import './Testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { seniorsAndColleagues, testimonialsStrings } from '../../assets/strings/strings';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className='t-heading'>
                {
                    testimonialsStrings.map((item, k) => <span key={k}>{item}</span>)
                }
                <div className='blur t-blur1' />
                <div className='blur t-blur2' />
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable: true}}
            >                
                    {
                        seniorsAndColleagues.map((item, k) =>
                            <SwiperSlide>
                                <div key={k} className='testimonial'>
                                    <div className='t-reviewer'>
                                        {/* <img src={item.src} alt='reviewer' /> */}
                                        <span>{item.name}</span>
                                        <span>{item.post}</span>
                                    </div>
                                    <span>{item.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    }                
            </Swiper>
        </div>
    )
};

export default Testimonials;
