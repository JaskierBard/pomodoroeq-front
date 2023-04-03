import React from 'react';

import { LogIn } from '../components/LogIn/LogIn';
import { HeaderLogout } from '../components/Header/HeaderLogout';
export const LoginView = () => (
    <>  
        <HeaderLogout/>
        <LogIn/>
    </>
);