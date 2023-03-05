import React, {useEffect, useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';

interface Clock{
  hours: number
  minutes: number
  seconds: number
  completed: boolean

}

export const App = () => {
  const [day, setDay] = useState<string[]>([]);



  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
 
  

  useEffect(() => {

    const days = []
      for (let i = 0; i < 14; i++) {
        const d = new Date()    
            d.setDate(d.getDate()+i);
        days.push(String(d.getDate()) + '  ' + (monthNames[d.getMonth()]))
      }
      setDay(days)
}, []);



const renderer = ({ hours, minutes, seconds, completed }:Clock) => {
  if (completed) {
    window.alert('Time is out!')
    return <span>Time is out!</span>;
  } else {
    return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
  }
};

const onPause = () => {
  
}


  return (
    <>
      <header>
        <h1>PomodoroEq</h1>
        <a>callendar</a>
        <div className='tomato'>0</div>
        <div className='seed'>0</div>
      </header>

      <div className='bgc'>
      <div className='clock'><Countdown date={Date.now() + (1000  * 60 * 25)} renderer={renderer} ></Countdown></div>
        <ul className='Callendar'>
          {day.map((item, index) => <li className='dayCallendar' key={index}><strong>{item}</strong></li>)}
        </ul>
        

      </div>
      
      
    </>
  );
}

