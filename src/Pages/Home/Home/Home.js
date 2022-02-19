// import { Typography } from '@mui/material';
import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Courses from '../../Courses/Courses/Courses';
import FeedBack from '../FeedBack/FeedBack';
import Contact from '../../Contact/Contact';
import SocialMedia from '../SocialMedia/SocialMedia';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {

    return (
        <div className='app'>
            <Header></Header>
            <Banner></Banner>
            <Courses></Courses>
            <FeedBack></FeedBack>
            <SocialMedia></SocialMedia>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;