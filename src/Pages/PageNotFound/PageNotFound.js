import React from 'react';
import './PageNotFound.css'
import errorPage from '../../Images/errorPage.png';
import Header from '../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';

const PageNotFound = () => {
    return (
        <>
            <Header></Header>
            <div>
                <img src={errorPage} alt="Page-Not-Found"></img>
            </div>
            <Footer></Footer>
        </>

    );
};

export default PageNotFound;