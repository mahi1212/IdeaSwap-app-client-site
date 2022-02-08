import { Typography } from '@mui/material';
import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Courses from '../../Courses/Courses/Courses';


const Home = () => {

    return (
        <div className='app'>
            <Banner></Banner>
            {/* <Typography variant="h5" className="heading" sx={{ textAlign: "left", py: 1, pl: 2, borderLeft: "10px solid green", mt: -3 }}> TOP RATED COURSES</Typography> */}
            {/* <TopRated></TopRated> */}
            {/* <Typography variant="h5" className="heading" sx={{ py: 1, pl: 2, borderLeft: "10px solid green", borderRight: "10px solid green"}}> COURSES WE OFFER</Typography> */}
            <Courses></Courses>
        </div>
    );
};

export default Home;