import React, { useState } from 'react';
import './Market.css'
export const Market = () => {
  const [tomato , setTomato] = useState<string>('0')
  const [cucumber , setCucumber] = useState<string>('0')
  const [pumpkin , setPumpkin] = useState<string>('0')


  

  const changeTomato = (event:any) => {
    setTomato(event.target.value);
  };
  const changeCucumber = (event:any) => {
    setCucumber(event.target.value);
  };
  const changePumpkin = (event:any) => {
    setPumpkin(event.target.value);
  };
   
    return (
        <>
       <div className="seeds-market">
              <form>
              <span className="formTitle">Nasiona</span>

              <label>
                <h2>Pomidor: {tomato}</h2><br/>
                <input
                    className='tomato'
                    type="range"
                    onChange={changeTomato}
                    step={1}
                    min={0}
                    max={50}
                    value={tomato}
                />
              </label>
              <label>
                <h2>Ogórek: {cucumber}</h2><br/>
                <input
                  className='cucumber'
                  type="range"
                  onChange={changeCucumber}
                  step={1}
                  min={0}
                  max={50}
                  value={cucumber}
          
                />
              </label>
              <label>
                <h2>Dynia: {pumpkin}</h2><br/>
                <input
                    className='pumpkin'
                    type="range"
                    onChange={changePumpkin}
                    step={1}
                    min={0}
                    max={50}
                    value={pumpkin}
                />
              </label>
              <br />
              <button>Kup ... suma</button>
              </form>
            </div>
        </>
      );
}
    