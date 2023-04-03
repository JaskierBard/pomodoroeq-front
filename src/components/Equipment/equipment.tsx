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
        {data ? ( 
            <div className='eq-container'>
            <ul>
                <li>Pomidor: {data.tomato}</li>
                <li>Ogórek: {data.cucumber}</li>
                <li>Dynia: {data.pumpkin}</li>
                <li>Nasiona pomidora: {data.tomatoSeed}</li>
                <li>Nasiona ogórka: {data.cucumberSeed}</li>
                <li>Nasiona dyni: {data.pumpkinSeed}</li>
            </ul>
            </div>
            
            

    

  ) : (

    <h1>Spinner</h1>

  )}
        </>
      );
}
    