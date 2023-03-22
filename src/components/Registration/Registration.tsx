import React, { FormEvent, useState } from "react";
import { LogIn } from "../LogIn/LogIn";

export const Registration = () => {
    const [form, setForm] = useState<any>({
        name: '',
        mail: '',
        password: '',
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const updateForm = (key: string, value:any) => {
        setForm((form: any) => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async(e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setResultInfo(`${data.name} added with ID ${data.id}`);
        } finally {
            setLoading(false)

        }
    }


    if (resultInfo !==null) {
        return <div>
                        <strong style={{backgroundColor: "yellow"}}>Account was created!</strong>

            <LogIn/>
            <strong style={{backgroundColor: "green"}}> You can log now!</strong>
        </div>
    }

    return <form onSubmit={sendForm}>
        <h1>Registration</h1>
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
            E-mail: <br/>
            <input 
                type="email" 
                value={form.email} 
                onChange={e => updateForm('mail',e.target.value)}
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
        
        <button type="submit">Create</button>
    </form>
};