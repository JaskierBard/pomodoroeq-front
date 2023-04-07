import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import { LogIn } from './components/LogIn/LogIn';
import { Logout } from './components/LogIn/LogOut';
import { NotFoundViewLoggedIn, NotFoundViewLoggedOut } from './views/NotFoundView';
import { RegistrationView } from './views/RegistrationView';
import { MarketView } from './views/MarketView';
import { HistoryCalendarView } from './views/HistoryCallendarView';
import { CalendarView } from './views/CallendarView';
import { Spinner } from './components/common/Spinner/Spinner';
import { getUserId } from './functions/getUserId';
import { HeaderLogin } from './components/Header/HeaderLogin';
import { HeaderLogout } from './components/Header/HeaderLogout';
import { Market } from './components/Market/Market';
import { HistoryCalendar } from './components/HistoryCalendar/HistoryCalendar';
import { Registration } from './components/Registration/Registration';
import Calendar from 'react-calendar';
import { Clock } from './components/Clock/Clock';

export const App = () => {
    const [isUser, setIsUser] = useState<any>(null);

    useEffect(() => {
        setIsUser(getUserId())
        },[isUser]);

    if (isUser) {
        return (
            <>  
                <Routes>
                    <Route path="/clock" element={<Clock/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/history" element={<HistoryCalendar/>}/>
                    <Route path="/market" element={<Market/>}/>
                    <Route path="*" element={<NotFoundViewLoggedIn/>}/>
                </Routes>
                <HeaderLogin/>
                <div className='bgc'>
                </div>
            </>
        );
        
    } else {
        return (
            <>  
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="*" element={<NotFoundViewLoggedOut/>}/>
                </Routes>
                <HeaderLogout/>
                <div className='bgc'>
                </div>
            </>
        );
    };
};

