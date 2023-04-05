import React, { useContext, useEffect, useState } from 'react';
import './Market.css'
import axios from 'axios';

export const BuyProducts = () => {
  const [tomatoSeed , setTomatoSeed] = useState<string>('0')
  const [cucumberSeed , setCucumberSeed] = useState<string>('0')
  const [pumpkinSeed , setPumpkinSeed] = useState<string>('0')
  const [value , setValue] = useState<number>(0)
  const [userId , setUserId] = useState<any | null>('')

  const [purchase , setPurchase] = useState<number>(0)


 

  useEffect(() => {
    sumPrice()
  });

  const sumPrice = async() =>  {
    const result = (Number(tomatoSeed) * 2) + (Number(cucumberSeed) * 4) + (Number(pumpkinSeed) * 10)
    setValue(result)
  }





  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/equipment", { tomatoSeed, cucumberSeed, pumpkinSeed, value, userId });
      setPurchase(res.data);
  
    } catch (err) {
      console.log(err);      
    }

  };

   
    return (   
       <div className="seeds-market">
              <form onSubmit={handleSubmit}> 
              <span className="formTitle">Nasiona</span>
              <label >
                <h2>Pomidor: {tomatoSeed}</h2><br/>
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
                <h2>Ogórek: {cucumberSeed}</h2><br/>
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
                <h2>Dynia: {pumpkinSeed}</h2><br/>
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
      );
}
    