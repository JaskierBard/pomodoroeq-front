import React from 'react';

import { HeaderLogin } from '../components/Header/HeaderLogin';
import { Callendar } from '../components/Calendar/callendar';
import { Clock } from '../components/Clock/Clock';
export const CalendarView = () => (
    <>  
        <HeaderLogin/>
        <Clock/>
        <Callendar/>
    </>
);