import React from 'react';
import Header from '../Shared/Header/Header';
import './PageNotFound.css'
import errorPage from '../../Images/errorPage.png';

const PageNotFound = () => {
    return (
        <div>
            <Header></Header>
            <img src={errorPage}></img>
        </div>
    );
};

export default PageNotFound;