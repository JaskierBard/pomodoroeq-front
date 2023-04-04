import React, { useEffect, useState } from 'react';
import './Equipment.css'
import axios from 'axios';

interface Props {
    user: any
 }

export const Equipment = (props:Props) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
       getEq()
      },[]);


    const getEq = async () => {
        // console.log(props.user.userId)
        try {
          
         const res = await fetch(`http://localhost:3001/api/equipment`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: props.user.userId,
            } )
        });
        const ol = await res.json()

        setData(ol['0']);
        } catch (err) {
        
    }

      };
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
    