import React from 'react';

import errorImg from './error.jpg';
import './error.scss';

const Error = () => {
    return (
        <>
            <div className="error-message">Something goes wrong...</div>
            <img className="error" src={errorImg} alt="error"/>
            
        </>
    );
};

export default Error;