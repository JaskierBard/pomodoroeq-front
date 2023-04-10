import React, { useEffect, useState } from 'react';
import { getUserId } from '../../functions/getUserId';
import './Buy.css'
import axios from 'axios';
import { Equipment } from '../Equipment/Equipment';

export const BuyProducts = () => {
  const [userId , setUserId] = useState<any | null>('')

  const [tomatoSeed , setTomatoSeed] = useState<string>('0')
  const [cucumberSeed , setCucumberSeed] = useState<string>('0')
  const [pumpkinSeed , setPumpkinSeed] = useState<string>('0')

  const [value , setValue] = useState<number>(0)
  const [message , setMessage] = useState<string>('')



  

  useEffect(() => {
    sumPrice()
    setUserId(getUserId())
  },[tomatoSeed, cucumberSeed, pumpkinSeed]);

  const sumPrice = () =>  {
    const result = (Number(tomatoSeed) * 2) + (Number(cucumberSeed) * 4) + (Number(pumpkinSeed) * 10)
    setValue(result)
  }

  const buySubmit = async (e:any) => {
    e.preventDefault();
    if (userId !== 0) {
    try {
     const res =  await axios.post("http://localhost:3001/equipment/buy", { tomatoSeed, cucumberSeed, pumpkinSeed, value, userId });
    setPumpkinSeed('0')
    setTomatoSeed('0')
    setCucumberSeed('0')
    setMessage('kupiłeś nasiona')
    const myInterval = setInterval(() => setMessage(''), 2000)
    setTimeout(() => {
      clearInterval(myInterval);
  }, 3000);


    } catch (err) {
      console.log(err);      
    }

  }
  };

   
    return (   
      <>
       <div className="form">
              <form onSubmit={buySubmit}> 
              <label >
                <h2>Nasiona pomidora: {tomatoSeed}</h2><br/>
                <input
                    className='tomato'
                    type="range"
                    onChange={(e) => setTomatoSeed(e.target.value)}
                    step={1}
                    min={0}
                    max={50}
                    value={tomatoSeed}
                />
              </label>
              <label>
                <h2>Nasiona ogórka: {cucumberSeed}</h2><br/>
                <input
                  className='cucumber'
                  type="range"
                  onChange={(e) => setCucumberSeed(e.target.value)}
                  step={1}
                  min={0}
                  max={50}
                  value={cucumberSeed}
          
                />
              </label>
              <label>
                <h2>Nasiona dyni: {pumpkinSeed}</h2><br/>
                <input
                    className='pumpkin'
                    type="range"
                    onChange={(e) => setPumpkinSeed(e.target.value)}
                    step={1}
                    min={0}
                    max={50}
                    value={pumpkinSeed}
                />
              </label>
              <br />
              <button>Kup za {value} monet</button>
              </form>
            </div>
            <Equipment message={message}/>

            </>
      );
}
    