import React, { useEffect, useState } from "react"
import { SingleDay } from "./singleDay";

export const Callendar = () => {
    const [day, setDay] = useState<string[]>([]);

 

  useEffect(() => {
    const monthNames = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca",
    "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"
  ];

    const days = []
      for (let i = 0; i < 14; i++) {
        const d = new Date()    
            d.setDate(d.getDate()+i);
        days.push(String(d.getDate()) + '  ' + (monthNames[d.getMonth()]))
      }
      setDay(days)
}, []);

return <ul className='Callendar'>
  {day.map((item, index) => (<SingleDay key={index} item={item} />))}
</ul>
}
