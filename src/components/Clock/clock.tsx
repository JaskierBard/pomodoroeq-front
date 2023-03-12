import React, { useState } from 'react';
import {ClockInterface} from 'types'
import Countdown, { calcTimeDelta, zeroPad } from 'react-countdown';


export const Clock = () => {
  const learningTime = (Date.now() +1000  * 60 * 25)

  const [pause, setPause] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const start = () => {
    setTimeLeft(timeLeft)
  }

  const tick = () => {
    setTimeLeft(timeLeft + 1000)
  }

  const renderer = ({completed, api}: ClockInterface) => {

    if (!completed) {
      if(!pause)  {
        api.start()
        return <span>{zeroPad(calcTimeDelta(learningTime -  timeLeft).minutes)}:{zeroPad(calcTimeDelta( learningTime -  timeLeft).seconds)}</span>;
  
      } else {
        api.pause()
        return <span>{zeroPad(calcTimeDelta((learningTime -  timeLeft)).minutes)}:{zeroPad(calcTimeDelta((learningTime -  timeLeft)).seconds)}</span>;
      }

    } else {
      return <span>Time is out!</span>;
    };
  };

  return <>
    <div className='clock'>
      <Countdown date={learningTime} renderer={renderer} onStart={start} onTick={tick} autoStart={false} controlled={false}></Countdown>
      <button onClick={() =>setPause(!pause)}>Click!</button>
      <button onClick={() =>setTimeLeft(0)}>Reset</button>
    </div>
  </>
}

