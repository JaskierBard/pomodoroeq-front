import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import { Admin } from './components/Admin/admin';

import { Callendar } from './components/Calendar/callendar';
import { Clock } from './components/Clock/Clock';
import { Header } from './components/Header/Header';
import { HistoryCalendar } from './components/HistoryCalendar/HistoryCalendar';
import { LogIn } from './components/LogIn/LogIn';
import { Logout } from './components/LogIn/LogOut';
import { Registration } from './components/Registration/Registration';



export const App = () => {

const [auth, setAuth] = useState<boolean>(false);


    
  return (
    <>  
        <Header/>
        <Routes>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/logout" element={<Logout/>}/>


            
        </Routes>
        <div className='bgc'>
            {/* <Clock/> */}
        </div>

    </>
);

}

