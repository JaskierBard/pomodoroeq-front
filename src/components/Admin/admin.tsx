import React, { useState } from "react";
import { Equipment } from "../Equipment/Equipment";


export const Admin = () => {


    const [hi, setHi] = useState<string>('Witaj u admina')




    fetch(`http://localhost:3001/api/admin`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => setHi(String(data)))

        return <>
        <h1>{hi}</h1>
        <button>Logout</button>
        </> 
}