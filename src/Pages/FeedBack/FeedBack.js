import React from 'react';
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
    const data = [
        {
            username: "Rahman Joy",
            description: "I'm just a beginner for Python and JS classes, and find this course really concise and challenging.They made it easy!",
        },
        {
            username: "M Rahman(Mahi)",
            description: "Very interesting course! Superb teaching and homework assignments. If you are interested in functional programming.",
        },
        {
            username: "ASM Rayat",
            description: "Amazing course I've seen ever! They teach everything practically. Really I appreciate them. No wonder it got so high average score.",
        },
        {
            username: "Adib Mahir",
            description: "I loved learning the concepts used in the ML language: case statements, recursion, pattern matching. The professor explained things really well.",
        },
        {
            username: "Jannat Jenny",
            description: "This course has long been on my favurite list. However, I have dropped out of previous sessions quite a few times and they worth watching",
        },
        {
            username: "Sumaiya Oishee",
            description: "An excellent course!  Make sure you really have enough time to take this course. There are a lot of videos. I'd recommend this course to everyone involved in programming.",
        },
        {
            username: "Jakiul Rafi",
            description: " There are minor things like I disliked like a few of the problems being worded unclearly and some lectures topics that weren't explained in the best manner.",
        },
        {
            username: "Farhan Kabir",
            description: " It's indeed one of the best courses. I like the way Dan breaks down complex concepts, like pattern matching or type interference, and aims at teaching the principles underlying software design.",
        }
    ]

    return (
        <div >
            <Typography variant="h5" className="heading" sx={{ py: 2, pl: 2, borderLeft: "10px solid #AA14F0", borderRight: "10px solid #AA14F0" }}> STUDENTS FEEDBACK</Typography>
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
                {data.map(user => (
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