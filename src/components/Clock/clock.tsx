import React, { useEffect, useState } from 'react';
import {ClockInterface} from 'types'
import Countdown, { zeroPad } from 'react-countdown';


export const Clock = () => {
    const [pause, setPause] = useState<boolean>(false);

    const learningTime = Date.now() + (1000  * 60 * 25)
    const breakeTime = Date.now() + (1000  * 60 * 5)
   

    const renderer = ({ minutes, seconds, completed, api}:ClockInterface) => {
        document.title = ((minutes+1).toString()) + ' minutes left';
        if(pause === true){
            api.start()
        } else {
            api.pause()
        }
        
        if (completed) {
          window.alert('Time is out!')
          return <span>Time is out!</span>;
        } else {
          return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
        }
      };


    
    
      return <>
        <div className='clock'>
        <Countdown date={learningTime} renderer={renderer}  autoStart={false}  controlled={false}></Countdown>
        <button onClick={() => setPause(true)}>Start</button>
        <button onClick={() => setPause(false)}>Pause</button>
        <button onClick={() => setPause(false)}>Reset</button>


        </div>
      </>
      
    

}

