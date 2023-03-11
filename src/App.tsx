import React from 'react';
import { Callendar } from './components/Calendar/callendar';
import { Clock } from './components/Clock/clock';


export const App = () => {
// const onPause = () => {
  
// }


  return (
    <>
      <header>
        <h1>PomodoroEq</h1>
        <div className='tomato'>0</div>
        <div className='seed'>0</div>
      </header>

      <div className='bgc'>
        <Clock></Clock>    
        <Callendar></Callendar>    
        

      </div>
      
      
    </>
  );
}

