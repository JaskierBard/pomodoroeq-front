import React from 'react';
import {ClockInterface} from 'types'
import Countdown, { zeroPad } from 'react-countdown';


export const Clock = () => {
  const renderer = ({completed, minutes, seconds, api}: ClockInterface) => {

    if (!completed) {
      if (api.isPaused() || api.isStopped()) {
        return <>
          <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          <button onClick={() => api.start()}>Start</button>
          <button onClick={() => api.stop()}>Reset</button>
        </> 
      } else {
        return <>
          <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          <button onClick={() => api.pause()}>Pause</button>
          <button onClick={() => api.stop()}>Reset</button>
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

