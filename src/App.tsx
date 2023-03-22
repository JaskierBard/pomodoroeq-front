import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";

import { Callendar } from './components/Calendar/callendar';
import { Clock } from './components/Clock/Clock';
import { Equipment } from './components/Equipment/equipment';
import { Header } from './components/Header/Header';
import { HistoryCalendar } from './components/HistoryCalendar/HistoryCalendar';
import { LogIn } from './components/LogIn/LogIn';
import { Registration } from './components/Registration/Registration';



export const App = () => {

  return (
    <>  
        <Header/>
        <Routes>
            {/* <Route path="/callendar" element={<Callendar/>}/> */}
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<LogIn/>}/>
            {/* <Route path="/history" element={<HistoryCalendar/>}/> */}



        </Routes>
        <div className='bgc'>
            <Clock/>
        </div>

    </>
);

}

