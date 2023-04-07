import React, { useEffect, useState } from 'react';
import { getUserId } from '../../functions/getUserId';
import './Market.css'
import axios from 'axios';
import { Message } from '../common/Message/Message';

export const BuyProducts = () => {
  const [tomatoSeed , setTomatoSeed] = useState<string>('0')
  const [cucumberSeed , setCucumberSeed] = useState<string>('0')
  const [pumpkinSeed , setPumpkinSeed] = useState<string>('0')
  const [value , setValue] = useState<number>(0)
  const [userId , setUserId] = useState<any | null>('')
  const [message , setMessage] = useState<string>('')
  const [showMessage , setShowMessage] = useState<boolean>(true)



  

  useEffect(() => {
    sumPrice()
    setUserId(getUserId())
    
    
  });

  const sumPrice = () =>  {
    const result = (Number(tomatoSeed) * 2) + (Number(cucumberSeed) * 4) + (Number(pumpkinSeed) * 10)
    setValue(result)
  }

  const buySubmit = async (e:any) => {
    e.preventDefault();
    if (userId !== 0) {
    try {
     const res =  await axios.post("http://localhost:3001/equipment/", { tomatoSeed, cucumberSeed, pumpkinSeed, value, userId });
     setMessage(res.data)
    //  setShowMessage(false)

    } catch (err) {
      console.log(err);      
    }

  }
  };

   
    return (   
      <>
      <Message text={message} show={showMessage}/>
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
              <button type='submit'>Kup za {value} monet</button>
              </form>
            </div>
            </>
      );
}
    