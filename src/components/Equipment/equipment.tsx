import React from 'react';
import './Equipment.css'
import axios from 'axios';

interface Props {
    user: any
 }

export const Equipment = (props:Props) => {



    const getEq = async () => {
        console.log(props.user.accessToken)
        try {
          await axios.get("http://localhost:3001/api/equipment" , 
          { 
            headers: { authorization: "Bearer " + props.user.accessToken },
            data: { id: props.user.userId } }
          );
          console.log('usuwam dane...')
        } catch (err) {
        }
      };
   
    return (
        <>
          <div onClick={getEq} className='equipment'></div>
        </>
      );
}
    