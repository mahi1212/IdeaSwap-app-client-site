import React from 'react';
import './Banner.css';
import video from '../../../Video/darkTyping.mp4';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
            <video loop autoPlay muted
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: "50%",
                    top: "50%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1
                }}
            // Video by cottonbro from Pexels
            >
                <source
                    src={video}
                    type="video/mp4"
                />
                Your browser does not support the video tag.{/* This is for old browsers that doesn't support video */}
            </video>
            <div className='text-design'>
                <Typography variant="h3" sx={{py:1, px: 1}}>New to Our Website?</Typography>
                <NavLink style={{textDecoration: "none"}} to="/signIn"><Button  variant='contained' sx={{py: 1.5}}>Let's Get Started</Button></NavLink>
            </div>
        </div>
    );
};

export default Banner;