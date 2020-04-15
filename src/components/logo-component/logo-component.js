import React from 'react';
import logo from '../../assets/images/logo.svg';

import './logo-component.scss';

export const LogoComponent = () => {
    return (
        <div className='logo-wrapper'>
            <img className='logo' src={logo} alt="Celaruss' logo"></img>
            <h1 className='logo-title'>CELARUS</h1>
        </div>
    );
};