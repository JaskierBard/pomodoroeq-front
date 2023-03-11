import React from 'react';
import { Callendar } from './components/Calendar/callendar';
import { Clock } from './components/Clock/clock';
import { Equipment } from './components/Equipment/equipment';


export const App = () => {
// const onPause = () => {
  
// }


  return (
    <>
      <header>
        <h1>PomodoroEq</h1>
        <Equipment></Equipment>
      </header>

      <div className='bgc'>
        <Clock></Clock>    
        <Callendar></Callendar>    
        

      </div>
      
      
    </>
  );
}

