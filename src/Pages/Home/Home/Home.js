import { Typography } from '@mui/material';
import React from 'react';
import './Home.css'
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';


const Home = () => {

    return (
        <div className='app'>
            <Header></Header>
            <Banner></Banner>
            <Typography variant="h5" className="heading" sx={{textAlign:"left", py:1, pl: 2, borderLeft: "10px solid green", mt: -3}}> TOP RATED COURSES</Typography>
            
        </div>
    );
};

export default Home;