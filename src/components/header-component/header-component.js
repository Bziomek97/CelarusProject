import React from 'react';
import './header-component.scss';

import { LogoComponent } from '../logo-component/logo-component';

export const HeaderComponent = () => {
    return (
        <header className='header-wrapper'>
            <LogoComponent/>
            <h3>Login or create new account</h3>
        </header>
    );
};