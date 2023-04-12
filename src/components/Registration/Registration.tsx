import React, { FormEvent, useState } from "react";

export const Registration = () => {
    const [form, setForm] = useState<any>({
        name: '',
        mail: '',
        password: '',
    });
    const [resultInfo, setResultInfo] = useState<string | null>(null)

    const updateForm = (key: string, value:any) => {
        setForm((form: any) => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async(e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/user/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setResultInfo(`${data.name} added with ID ${data.id}`);
        } finally {
        }
    }

    if (resultInfo !==null) {
        return <div>
            <strong style={{backgroundColor: "green"}}>Account was created!</strong>
            <strong style={{backgroundColor: "green"}}> You can log now!</strong>
        </div>
    }

    return <div className="form">
    <form onSubmit={sendForm}>
        <h1>Utwórz konto</h1>
        <p>
        <label>
            Nazwa użytkownika: <br/>
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
            Hasło: <br/>
            <input 
                type="current-password" 
                value={form.password} 
                onChange={e => updateForm('password',e.target.value)}
            />
        </label>
        </p>  
        
        <button type="submit">Utwórz konto</button>
    </form>
    </div>
};