import React, { useEffect, useState } from 'react';
import './Market.css'
export const BuyProducts = () => {
  const [tomato , setTomato] = useState<string>('0')
  const [cucumber , setCucumber] = useState<string>('0')
  const [pumpkin , setPumpkin] = useState<string>('0')
  const [sum , setSum] = useState<number>(0)

  useEffect(() => {
  sumPrice()
  });

  const sumPrice = async() =>  {
    const result = (Number(tomato) * 2) + (Number(cucumber) * 4) + (Number(pumpkin) * 10)
    setSum(result)
  }



  const changeTomato = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTomato(e.target.value);
  };
  const changeCucumber = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCucumber(e.target.value);
  };
  const changePumpkin = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPumpkin(e.target.value);
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
              <button>Kup za {sum} monet</button>
              </form>
            </div>
        </>
      );
}
    