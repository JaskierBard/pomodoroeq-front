import React, { useState } from 'react';
import { Callendar } from './components/Calendar/callendar';
import { Clock } from './components/Clock/clock';
import { Equipment } from './components/Equipment/equipment';


export const App = () => {
  const [isLogged, setIsLogged] = useState<boolean>(true);

  if (isLogged === true) {
    return (
      <>
        <header>
          <h1>PomodoroEq</h1>
          <Equipment/>
          <button onClick={() => setIsLogged(false)}>Sign Out</button>
        </header>
  
        <div className='bgc'>
          <Clock/>    
          <Callendar/>    
        </div>
      </>
    );
  } else {
    return (
      <>
        <header>
          <h1>PomodoroEq</h1>
          <button onClick={() => setIsLogged(true)}>Sign In</button>
        </header>
  
        <div className='bgc'>
          <Clock/>    
        </div>
      </>
    );
  }


}

