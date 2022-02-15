import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#072227', paddingY: '1rem' }} paddingX={{ sm: '10px', md: '10px', lg: '7rem' }}>
            <Grid container spacing={2} rowGap={4}>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant='h5' sx={{ color: '#fff', paddingBottom: '10px' }}>Contact Us</Typography>
                    <hr style={{width: '10rem'}}></hr>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <a href='#sample'><i style={{ color: '#5800FF', padding: '0 20px' }} className="fab fa-facebook-square fa-3x"></i></a>
                        <a href='#sample'><i style={{ color: '#405DE6', padding: '0 20px' }} className="fab fa-linkedin fa-3x"></i></a>
                        <a href='#sample'><i style={{ color: '#C13584', padding: '0 20px' }} className="fab fa-instagram-square fa-3x"></i></a>
                        <a href='#sample'><i style={{ color: '#5851D8', padding: '0 20px' }} className="fab fa-twitter fa-3x"></i></a>
                    </Box>
                    {/* <Typography variant='outline' sx={{ color: '#fff', paddingBottom: '10px', textAlign: 'left' }}>We are a team of some hard working members who are always active to help out others in case of emegency help! We reply super fast your email if you ask something. Some of us are web and software expert, so if you need to make a platform you also can contact us. Happy learing!</Typography> */}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant='h5' sx={{ color: '#fff', paddingBottom: '10px' }}>Quick Links</Typography>
                    <hr style={{width: '10rem'}}></hr>
                    <div className='link' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <NavLink to='/home' style={{ color: '#fff', padding: '5px 0' }}>Home</NavLink>
                        <NavLink to='/courses' style={{ color: '#fff', margin: '5px 0' }}>Our Courses</NavLink>
                        <NavLink to='/myFeedback' style={{ color: '#fff', padding: '5px 0' }}>Feedback</NavLink>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant='h5' sx={{ color: '#fff', paddingBottom: '10px' }}>Terms</Typography>
                    <hr style={{width: '10rem'}}></hr>
                    <div className='link' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.termsandconditionsgenerator.com/live.php?token=NXgxSL4Pvl1uPKKbhIXrCVEfy4Y22ymt' style={{ color: '#fff', padding: '10px 0' }}>Terms and Services</a> {/*From Terms and condition generator */}
                        <a target="_blank" rel="noopener noreferrer" href='https://www.cookiepolicygenerator.com/live.php?token=qCLH9EjWe7npcwEpFaNcDGFZt7MRS1Vy' style={{ color: '#fff', padding: '10px 0' }}>Our Cookies Policy</a> {/*From Cookies generator */}
                    </div>
                </Grid>
            </Grid>
            <hr style={{marginTop: '20px'}}></hr>
            <Typography variant='subtitle1' sx={{ color: '#fff', paddingY: '10px' }}>Copyright &copy; 2022 All right reserved by idea Swap</Typography>
        </Box>
    );
};

export default Footer;