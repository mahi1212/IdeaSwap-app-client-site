import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Feedback.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/feedbacks')
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    }, [])

    return (
        <div >
            <Typography variant="h5" className="heading" sx={{ py: 2, pl: 2 }}> STUDENT'S FEEDBACK</Typography>
            <Swiper
                spaceBetween={50}
                // centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {feedbacks.map(user => (
                    <SwiperSlide key={user.username}>
                        <div className='box'>
                            <div className='inner-box'>
                                <div className='description'>{user.description}</div>
                                <div className='username'>❤️ -by {user.username}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeedBack;