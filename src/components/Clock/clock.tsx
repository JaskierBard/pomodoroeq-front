import React from 'react';
import './Clock.css'
import Countdown, { zeroPad } from 'react-countdown';

export interface ClockInterface{
  hours: number
  minutes: number
  seconds: number
  completed: boolean
  api: any
}

export const Clock = () => {
  const renderer = ({completed, minutes, seconds, api}:ClockInterface) => {

    if (!completed) {
      document.title = `${zeroPad(minutes)} minutes left`;

      if (api.isPaused() || api.isStopped()) {
        return <>
          <span >{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          <button onClick={() => api.start()}>Start</button>
          <button onDoubleClick={() => api.stop()}>Reset</button>
        </> 
      } else {
        return <>
          <span >{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          <button onClick={() => api.pause()}>Pauza</button>
          <button onDoubleClick={() => api.stop()}>Reset</button>
        </> 
      }

    } else {
      window.alert('Time is out!')
      return <span>Time is out!</span>;
    };
  };

  return <>
    <div className='clock'>
      <Countdown 
        date={Date.now() + 1000  * 60 * 25}
        renderer={renderer}
        autoStart={false}
      ></Countdown>
    </div>
  </>
}

