import React, { useEffect, useState } from 'react';
import './Clock.css'
import Countdown, { zeroPad } from 'react-countdown';
import { getUserId } from '../../functions/getUserId';
import { getSeed } from '../../functions/getEquipment';
import { ClockInterface } from "types";
import { Equipment } from '../Equipment/Equipment';

export const Clock = () => {
  const [choice, setChoice] = useState<boolean>(true);
  const [wegetable, setWegetable] = useState<string>('');
  const [userId , setUserId] = useState<number>(0)

  useEffect(() => {
    setUserId(getUserId())
    const AsyncFunction  = async () => {
      if (1 < await getSeed(wegetable)) {
        setChoice(false)
      }
    }
    AsyncFunction()
    },[wegetable]);

    const getReward = async () => {
      try {
        await fetch("http://localhost:3001/equipment/reward/", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              needs: wegetable,
              userId: userId
          } )
      });      
      } catch (err) {
        console.log(err);      
      }
    }
  const renderer = ({completed, minutes, seconds, api}:ClockInterface) => {

    if (!completed) {
      document.title = `${zeroPad(minutes)} minutes left`;

      if (api.isStopped()) {
        return <>
          <span >{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          <button onClick={() => api.start()}>Start</button>
          <button onDoubleClick={() => api.stop()}>Reset</button>
        </> 
      } else {
        return <div className='bgc2'>
          <div className='bgc3'>
          <div className='container'>
          <span >{zeroPad(minutes)}:{zeroPad(seconds)}</span>
          <button onClick={() => api.pause()}>Pauza</button>
          <button onDoubleClick={() => api.stop()}>Reset</button>
          </div>
          </div>
        </div> 
      }

    } else {
      setChoice(true)
      setWegetable('')
        getReward()
        window.alert('Time is out!')
      return <span>Time is out!</span>;
    };
  };

  
  return <> { choice ? (<div className="form">
    <h1>Co chcesz zasadzić?</h1>
    <button className="option" onClick={ () => setWegetable('tomato') }>
      <img src="./assets/images/tomato.png" alt="Obrazek 1"/>
    </button>
    <button className="option" onClick={ () => setWegetable('cucumber')}>
      <img src="./assets/images/cucumber.png" alt="Obrazek 2"/>
    </button>
    <button className="option" onClick={ () => setWegetable('pumpkin')}>
      <img src="./assets/images/pumpkin.png" alt="Obrazek 3"/>
    </button>
</div>) : ( <div className='clock'>
      <Countdown 
        date={Date.now() + 1000  * 60 * 25}
        renderer={renderer}
        autoStart={false}
      ></Countdown>
    </div>)
  }    
    <Equipment/>
  </>
}


