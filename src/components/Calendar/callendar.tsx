import React, { useEffect, useState } from "react"
import { SingleDay } from "./singleDay";

export const Callendar = () => {
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

return <ul className='Callendar'>
  {day.map((item, index) => (<SingleDay item={item} index={index}/>))}
</ul>
}
