import React, {useEffect, useState } from 'react';

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
        days.push(String(d.getDate())+ (monthNames[d.getMonth()]))
      }
      setDay(days)
}, []);


  return (
    <>
      <header>
        <h1>PomodoroEq</h1>
        

        <div className='tomato'>0</div>
        <div className='seed'>0</div>



      </header>
      <div className='bgc'>
        <ul className='Callendar'>
          {day.map((item, index) => <li className='dayCallendar' key={index}><strong>{item}</strong></li>)}
        </ul>
      </div>
      
      
    </>
  );
}

