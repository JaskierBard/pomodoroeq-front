import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { getEquipment } from '../../functions/getEquipment';

interface Props {
  message?: string | number
}

export const Equipment = (props: Props) => {
    const [data, setData] = useState<any>(null);
    const [message, setMessage] = useState<any>(null);


    useEffect(() => {
      // setMessage(props.message)
      const AsyncFunction  = async () => {
        setData(await getEquipment())
      }
      

      
      AsyncFunction()
      },[props.message]);



    return (
        <>
         <p className='message'>{props.message}</p>

        {data ? ( <>
            <div className='eq-container'>
            <ul>
                <li><img src="./assets/images/tomato.png" alt="" /> {data.tomato}</li>
                <li><img src="./assets/images/cucumber.png" alt="" />{data.cucumber}</li>
                <li><img src="./assets/images/pumpkin.png" alt="" />{data.pumpkin}</li>
                <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.tomatoSeed}</li>
                <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.cucumberSeed}</li>
                <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.pumpkinSeed}</li>
                <div className='wallet'>{data.money} <img src="./assets/images/coin.png" alt="" /></div>

            </ul>
            </div>

            </>
            

    

  ) : (

    <h1>Spinner</h1>

  )}
        </>
      );
}
    