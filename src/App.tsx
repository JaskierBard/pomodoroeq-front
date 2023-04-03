import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import { Admin } from './components/Admin/admin';

import { Callendar } from './components/Calendar/callendar';
import { Clock } from './components/Clock/Clock';
import { HistoryCalendar } from './components/HistoryCalendar/HistoryCalendar';
import { LogIn } from './components/LogIn/LogIn';
import { Logout } from './components/LogIn/LogOut';
import { Market } from './components/Market/Market';
import { Registration } from './components/Registration/Registration';
import { NotFoundView } from './views/NotFoundView';
import { LoginView } from './views/LoginView';
import { RegistrationView } from './views/RegistrationView';
import { MarketView } from './views/MarketView';



export const App = () => {

  return (
    <>  
        <Routes>
            <Route path="/" element={<Clock/>}/>
            <Route path="/registration" element={<RegistrationView/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/market" element={<MarketView/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<NotFoundView/>}/>
        </Routes>

        <div className='bgc'>
        </div>
        <footer>Credits</footer>
    </>
);

}

