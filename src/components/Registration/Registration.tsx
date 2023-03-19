import React, { FormEvent, useState } from "react";

export const Registration = () => {
    const [form, setForm] = useState<any>({
        name: '',
        count: 0,
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
            const res = await fetch(`http://localhost:3001/gift`, {
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
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Add another one</button>
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
                onChange={e => updateForm('count',e.target.value)}
            />
        </label>
        </p>
        <p>
        <label>
            Password: <br/>
            <input 
                type="password" 
                value={form.password} 
                onChange={e => updateForm('password',e.target.value)}
            />
        </label>
        </p>  
        
        <button type="submit">Create</button>
    </form>
};