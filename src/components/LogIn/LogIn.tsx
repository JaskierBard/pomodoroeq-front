import React, { FormEvent, useState } from "react";
import { Admin } from "../Admin/admin";
import { Callendar } from "../Calendar/callendar";
import { Clock } from "../Clock/Clock";
import { Equipment } from "../Equipment/Equipment";

export const LogIn = () => {
    const [form, setForm] = useState<any>({
        name: '',
        password: '',
    });

    const [id, setId] = useState<string | null>(null)

    const updateForm = (key: string, value:any) => {
        setForm((form: any) => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async(e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3001/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setId(`${data.user}`);
        } finally {
            // setLoading(false)
        }
    }


    if (id !==null) {

        return <>
        
        <Admin/>
        <button>Logout</button>
        </> 
    }

    return <form onSubmit={sendForm}>
        <h1>Login</h1>
        <p>
        <label>
            Name: <br/>
            <input 
                type="text" 
                value={form.name} 
                onChange={e => updateForm('name', e.target.value)}
            />
        </label>
        </p>
        <p>
        <label>
            Password: <br/>
            <input 
                type="current-password" 
                value={form.password} 
                onChange={e => updateForm('password',e.target.value)}
            />
        </label>
        </p>  
        
        <button type="submit">Log in</button>
    </form>
};