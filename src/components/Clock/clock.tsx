import React, { useEffect, useState } from 'react';
import {ClockInterface} from 'types'
import Countdown, { zeroPad } from 'react-countdown';


export const Clock = () => {
    const [time, setTime] = useState<number>(1);

    useEffect(() => {
        document.title = time.toString();
        console.log(time)
    }, []);

    const renderer = ({ hours, minutes, seconds, completed }:ClockInterface) => {
        setTime(minutes)
        if (completed) {
          window.alert('Time is out!')
          return <span>Time is out!</span>;
        } else {
          return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
        }
      };
    
    
      return       <div className='clock'><Countdown date={Date.now() + (1000  * 60 * 25)} renderer={renderer} ></Countdown></div>

}

