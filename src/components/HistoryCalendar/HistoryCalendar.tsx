import React, { useEffect, useState } from "react"
import './HistoryCalendar.css'
import Calendar from 'react-calendar';


export const HistoryCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date}   minDate={new Date(2023, 1, 1)}   minDetail={'year'}  maxDate={new Date()}/>
      </div>
    
  );
}

