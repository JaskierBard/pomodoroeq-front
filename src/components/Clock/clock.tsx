import React, { useEffect, useState } from 'react';
import {ClockInterface} from 'types'
import Countdown, { calcTimeDelta, zeroPad } from 'react-countdown';


export const Clock = () => {
    const [pause, setPause] = useState<boolean>(true);
    const [dateStart, setDateStart] = useState<number>(Date.now()+ (1000  * 60 * 25));

    const update = (Date.now()+ (1000  * 60 * 25)) - dateStart
    const learningTime = Date.now() + (1000  * 60 * 25)

  

    useEffect(() => {
        setDateStart(update)


  }, [pause]);

 

    const renderer = ({completed, api}: ClockInterface) => {
      

        if (!completed) {
          if(!pause)  {
            api.start()
            // console.log(dateStart)
            return <span>{zeroPad(calcTimeDelta(dateStart).minutes)}:{zeroPad(calcTimeDelta(dateStart).seconds)}</span>;

  
          } else {
            api.pause()
            console.log(dateStart)

            return <span>{zeroPad(calcTimeDelta(update).minutes)}:{zeroPad(calcTimeDelta(update).seconds)}</span>;

  
          }
        } else {
          return <span>Time is out!</span>;

        
        }
      };


    
    
      return <>
        <div className='clock'>
          <Countdown date={learningTime} renderer={renderer}  autoStart={false} controlled={false}></Countdown>
          <button onClick={() =>setPause(!pause)}>Click!</button>
        </div>
      </>
      
    

}

