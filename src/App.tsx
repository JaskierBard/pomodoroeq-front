import React from 'react';
import {Route, Routes} from "react-router-dom";
import { LogIn } from './components/LogIn/LogIn';
import { Logout } from './components/LogIn/LogOut';
import { NotFoundView } from './views/NotFoundView';
import { RegistrationView } from './views/RegistrationView';
import { MarketView } from './views/MarketView';
import { HistoryCalendarView } from './views/HistoryCallendarView';
import { CalendarView } from './views/CallendarView';
import { Spinner } from './components/common/Spinner/Spinner';

export const App = () => {
  return (
    <>  
        <Routes>
            <Route path="/clock" element={<CalendarView/>}/>
            <Route path="/registration" element={<RegistrationView/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/history" element={<HistoryCalendarView/>}/>
            <Route path="/market" element={<MarketView/>}/>
            <Route path="*" element={<NotFoundView/>}/>
        </Routes>

        <div className='bgc'>
        </div>
    </>
);

}

