import React, { useEffect, useState } from 'react';
import './Sell.css'
import { RandomCustomer } from '../../../functions/customersCreator'
import { getUserId } from '../../../functions/getUserId';

interface Customers {
    name: string;
    quantity: number;
    needs: string;
    picture: string;
    needPicture: string;
  }

export const SellProducts = () => {
  const [customers , setCustomers] = useState<Customers[]>([
    {  name: 'error' ,quantity: 1, needs: 'error', picture: 'error', needPicture:'error'},
  ])
  const [sell , setSell] = useState<number>(0)


  const [userId , setUserId] = useState<number>(0)

  useEffect(() => {
    setUserId(getUserId())
    getCustomers()
    },[userId]);

    const getCustomers = async () => {
        if (userId !== 0) {
         try {
           
          const res = await fetch(`http://localhost:3001/api/customer`, {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 userId: userId,
             } )
         });
         const ol = await res.json()
         console.log(ol)
         setCustomers(ol);
         } catch (err) {
         }
 
     }
 
       };


  const handleSubmit = async (e:any) => {
    // e.preventDefault();
    const customer = RandomCustomer()
    // console.log(customer.name + ' chce kupić ' + customer.quantity+ ' ' + customer.needs)

    try {
      const res = await fetch("http://localhost:3001/api/customer", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:customer.name, 
            quantity:customer.quantity, 
            needs:customer.needs,
            user_id: userId
        } )
        

    });
    const ol = await res.json()
    console.log(ol);


    } catch (err) {
      console.log(err);      
    }

    

  };
   
    return (<>
        <button onClick={handleSubmit}>generuj klienta za 100 monet</button>
    <form onSubmit={handleSubmit}> 
       <div className="customers">
            {customers.map((customer:Customers) => 
                <div className='customer'>
                    <div className='needs'>
                        <p>
                            <strong>
                                {customer.name +' '} 
                            </strong>
                            chce kupić  
                            {' ' +customer.quantity}
                            <br />
                            <img  src={customer.needPicture} alt="customer" />

                        </p>

                    </div>
                    <img  className='picture' src={customer.picture}></img>

                    <button type='submit' >Sprzedaj</button>

                </div>
                )}

        </div>
            
              
    </form>
    </>

      );
}
    