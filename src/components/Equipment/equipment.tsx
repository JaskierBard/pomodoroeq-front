import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { getEquipment } from '../../functions/getEquipment';

interface Props {
  message?: string | number
}
export const Equipment = (props: Props) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const AsyncFunction  = async () => {
    setData(await getEquipment())
  };
      
    AsyncFunction()
  },[props.message]);

  return (
    <>
      <p className='message'>{props.message}</p>
        {data ? ( 
          <div className='eq-container'>
            <ul>
              <li><img src="./assets/images/tomato.png" alt="" /> {data.tomato}</li>
              <li><img src="./assets/images/cucumber.png" alt="" />{data.cucumber}</li>
              <li><img src="./assets/images/pumpkin.png" alt="" />{data.pumpkin}</li>
              <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.tomatoSeed}</li>
              <li><img src="./assets/images/cucumber-seed.png" alt="nasiona ogórka" />{data.cucumberSeed}</li>
              <li><img src="./assets/images/pumpkin-seed.png" alt="nasiona dyni" />{data.pumpkinSeed}</li>
              <div className='wallet'>{data.money} <img src="./assets/images/coin.png" alt="" /></div>
            </ul>
          </div>
        ):(<p>Loading...</p>)}
    </>
  );
}
    