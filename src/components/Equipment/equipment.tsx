import React from 'react';

export const Equipment = () => {

  
    const getEq = async(e:any) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3001/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        } finally {
            // setLoading(false)
        }
    }
   
    return (
        <>
          <div className='tomato'>0</div>
          <div className='seed'>0</div>
        </>
      );
}
    