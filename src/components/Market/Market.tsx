import React, { useEffect, useState } from 'react';
import { BuyProducts } from './Buy';
import './Market.css'
import { SellProducts } from './Sell/Sell';
export const Market = () => {
const [isSell, setIsSell] = useState<boolean>(true)


return (
  <div >
    <div className="buttons-container">
      <button className='buy-button' onClick={e => setIsSell(false)}>Kup nasiona</button>
      <button className='sell-button' onClick={e => setIsSell(true)}>Sprzedaj warzywa</button>
    </div>
    {isSell ? (
      
      <SellProducts/>

    ) : (

      <BuyProducts/>

    )}
    </div>
)
}  