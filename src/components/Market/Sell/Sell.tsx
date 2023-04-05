import React, { useEffect, useState } from 'react';
import './Sell.css'
export const SellProducts = () => {
//   const [tomato , setTomato] = useState<string>('0')

  const customers =[
    {
        name: 'Andrzej',
        picture: "./assets/images/customer1.png",
        needs: 'chce kupić 6',
        img: "./assets/images/pumpkin.png"
    },
    {
        name: 'Monika',
        picture: "./assets/images/customer2.png",
        needs: 'chce kupić 1 ',
        img: "./assets/images/cucumber.png"
    },{
        name: 'Jacek',
        picture: "./assets/images/customer1.png",
        needs: 'chce kupić 3 ',
        img: "./assets/images/tomato.png"
    },{
        name: 'Wojtek',
        picture: "./assets/images/customer1.png",
        needs: 'chce kupić 2 ',
        img: "./assets/images/cucumber.png"
    },{
        name: 'Weronika',
        picture: "./assets/images/customer2.png",
        needs: 'chce kupić 5 ',
        img: "./assets/images/cucumber.png"
    }
  ] 

   
    return (
        <>
       <div className="customers">
            {customers.map(person => 
                <div className='customer'>
                    <div className='needs'>
                        <p>
                            <strong>
                                {person.name}
                            </strong>
                            <br />
                            {person.needs}
                            <br />
                            <img src={person.img}/>
                        </p>
                    </div>
                    <img className='picture' src={person.picture} alt="customer" />
                </div>
                )}

        </div>
            
              
        </>
      );
}
    