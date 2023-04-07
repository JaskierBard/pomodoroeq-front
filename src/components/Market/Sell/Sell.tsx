import React, { useEffect, useState } from 'react';
import './Sell.css'
import { RandomCustomer } from '../../../functions/customersCreator'
import { getUserId } from '../../../functions/getUserId';

interface Customers {
    id: string;
    name: string;
    quantity: number;
    needs: string;
    picture: string;
    needPicture: string;
  }

export const SellProducts = () => {
  const [customers , setCustomers] = useState<Customers[]>(
    [
      { id: '1', name: 'error' ,quantity: 1, needs: 'error', picture: 'error', needPicture:'error'},
    ]
  )
  const [order , setOrder] = useState<any>()
  const [userId , setUserId] = useState<number>(0)



  useEffect(() => {
    setUserId(getUserId())
    getCustomers()
    },[userId]);

  


    const getCustomers = async () => {
        if (userId !== 0) {
         try {
           
          const res = await fetch(`http://localhost:3001/customer/`, {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 userId: userId,
             } )
         });
         const ol = await res.json()
         setCustomers(ol);
         } catch (err) {
         }
 
     }
 
       };


  const getClient = async (e:any) => {
    const customer = RandomCustomer()
    try {
      const res = await fetch("http://localhost:3001/customer/", {
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
    console.log(await res.json())
    getCustomers()
    
    } catch (err) {
      console.log(err);      
    }



    

  };

  const sellSubmit = async (e:any) => {
    e.preventDefault();
    if (order) {
      try {
        const res = await fetch("http://localhost:3001/customer", {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              id: order.id,
              name:order.name, 
              quantity:order.quantity, 
              needs:order.needs,
              userId: userId,

          } )
          
  
      });
      const message = await res.json()
      setOrder(null)
      getCustomers()
      return <p>{message}</p>
  
      } catch (err) {
        console.log(err);      
      }
    }
   
  }
   
    return (<>
    <form onSubmit={sellSubmit}> 
       <div className="customers">
            {customers.map((customer:Customers) => 
                <div className='customer' key={customer.id}>
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
                    <img  className='picture' src={customer.picture} alt='customer'></img>

                    <button className='sellButton' onClick={e => setOrder(
                      {
                        id: customer.id,
                        name:customer.name,
                        quantity:customer.quantity,
                        needs: customer.needs,
                    }
                    )} >Sprzedaj</button>

                </div>
                )}

        </div>
            
              
    </form>
    <button className='getClientButton' onClick={getClient}>zachęć nowego klienta za 10 monet</button>
    {/* <p>Nowy klient pojawi się za: 9:23minut</p> */}

    </>

      );
}