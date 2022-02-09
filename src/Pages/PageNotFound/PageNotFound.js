import React from 'react';
import './PageNotFound.css'
import errorPage from '../../Images/errorPage.png';

const PageNotFound = () => {
    return (
        <div>
            <img src={errorPage} alt="Page-Not-Found"></img>
        </div>
    );
};

export default PageNotFound;