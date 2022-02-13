import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import socialBackground from '../../../Images/socialRem.png'
import { Typography, Button } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMedia = () => {
    return (
        <Box sx={{ width: '100%' }} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6} style={{
                    backgroundImage: `url(${socialBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    marginTop: '10px',
                    height: '80vh',
                    objectFit: 'cover'
                }}>
                    <Typography variant='h5' sx={{ py: 3, background: '#fff' }}> JOIN US ON </Typography>
                    <Box sx={{ width: '100%' }} style={{border: '1px solid red', height: '60vh'}}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                {/* design purpose */}
                                
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 22 }}>
                                <Grid sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '2', gridGap: '1rem' }}>
                                    <Button><a href='#sample'><i style={{ color: 'blue', padding: '0 20px' }} className="fab fa-facebook-square fa-3x"></i></a></Button>
                                    <Button><a href='#sample'><i style={{ color: '#405DE6' }} className="fab fa-linkedin fa-3x"></i></a></Button>
                                    <Button><a href='#sample'><i style={{ color: '#C13584' }} className="fab fa-instagram-square fa-3x"></i></a></Button>
                                    <Button><a href='#sample'><i style={{ color: 'blue' }} className="fab fa-twitter fa-3x"></i></a></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ background: '#fff' }}>
                    <Typography variant='h5' sx={{ color: '#000', py: 3 }}> FAQ </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SocialMedia;