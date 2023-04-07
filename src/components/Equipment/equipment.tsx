import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { getUserId } from '../../functions/getUserId';
import { getEquipment } from '../../functions/getEquipment';



export const Equipment = () => {
    const [data, setData] = useState<any>(null);
    // const [userId , setUserId] = useState<number>(0)

    useEffect(() => {
      const AsyncFunction  = async () => {
        // setUserId(await getUserId())
        setData(await getEquipment())
      }
      AsyncFunction()
      },[]);



    return (
        <>
        {data ? ( <>
            <div className='eq-container'>
            <ul>
                <li><img src="./assets/images/tomato.png" alt="" /> {data.tomato}</li>
                <li><img src="./assets/images/cucumber.png" alt="" />{data.cucumber}</li>
                <li><img src="./assets/images/pumpkin.png" alt="" />{data.pumpkin}</li>
                <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.tomatoSeed}</li>
                <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.cucumberSeed}</li>
                <li><img src="./assets/images/tomato-seed.png" alt="nasiona pomidora" />{data.pumpkinSeed}</li>
            </ul>
            </div>
                        <div className='wallet'>{data.money} <img src="./assets/images/coin.png" alt="" /></div>

            </>
            

    

  ) : (

    <h1>Spinner</h1>

  )}
        </>
      );
}
    