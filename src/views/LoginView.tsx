import React from 'react';

import { LogIn } from '../components/LogIn/LogIn';
import { HeaderLogout } from '../components/Header/HeaderLogout';
import { Equipment } from 'src/components/Equipment/Equipment';
export const LoginView = () => (
    <>  
        <HeaderLogout/>
        <LogIn/>
    </>
);