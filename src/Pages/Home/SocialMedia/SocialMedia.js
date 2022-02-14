import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import socialBackground from '../../../Images/socialRem.png'
import { Typography, Button } from '@mui/material';
import FAQue from '../FAQ/FAQue';
import Chip from '@mui/material/Chip';
// AOS library for scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const SocialMedia = () => {
    useEffect(()=>{
        AOS.init();//initializing AOS
    }, [])

    return (
        <Box sx={{ width: '100%', mt:12 }} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6} style={{
                    backgroundImage: `url(${socialBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    marginTop: '10px',
                    height: '80vh',
                    objectFit: 'cover',
                }}>
                    <Chip sx={{ py: 4,px: 5, background: '#fff', fontSize:'1.2rem' }} label="JOIN US ON" variant="outlined" />
                    <Box sx={{ width: '100%' }} style={{ height: '50vh' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} data-aos="fade-right">
                            <Grid item xs={6}>
                                {/* design purpose */}
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 22 }}>
                                <Grid sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '2', gridGap: '1rem' }}>
                                    <Button><a href='#sample'><i style={{ color: 'blue', padding: '0 20px' }} className="fab fa-facebook-square fa-3x"></i></a></Button>
                                    <Button><a href='#sample'><i style={{ color: '#405DE6' }} className="fab fa-linkedin fa-3x"></i></a></Button>
                                    <Button><a href='#sample'><i style={{ color: '#C13584' }} className="fab fa-instagram-square fa-3x"></i></a></Button>
                                    <Button><a href='#sample'><i style={{ color: '#5851D8' }} className="fab fa-twitter fa-3x"></i></a></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ background: '#fff' }}>
                    <Typography variant='h5' sx={{ color: '#000', mt: 4, pb: 2}}> FAQ </Typography>
                    <FAQue></FAQue>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SocialMedia;