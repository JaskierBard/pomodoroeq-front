import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { HeaderLogin } from "../Header/HeaderLogin";
import { HeaderLogout } from "../Header/HeaderLogout";
import { Equipment } from "../Equipment/Equipment";





export const LogIn = () => {
    const [user, setUser] = useState<any>()
    const [username, setUsername] = useState<string>('Mati');
    const [password, setPassword] = useState<string>('mati')
    const [decodedToken, setDecodedToken] = useState<any>()

  


    const refreshToken = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/refresh", { token: user.refreshToken, id:user.userId });
        setUser({
          ...user,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };

      useEffect(() => {
        try {
          const getToken = localStorage.getItem('user');

          if (getToken) {
            setUser(JSON.parse(getToken))
          }
         
          
        } finally {

        }
      },[]);

    


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3001/api/login", { username, password });
          setUser(res.data);
          console.log(res.data)
          localStorage.setItem('user', JSON.stringify(res.data));
      
        } catch (err) {
          console.log(err);      
        }

      };

 
      
      const logout = async (e:any) => {
        console.log('usuwam dane ' + user.accessToken)

        try {
          await axios.delete("http://localhost:3001/api/logout" , 
          { 
            headers: { authorization: "Bearer " + user.accessToken },
            data: { id: user.userId } }
          );
          console.log('usuwam dane...')
          setDecodedToken(null)
          setUser(null)
          localStorage.removeItem('user')
        } catch (err) {
        }
      };

      
      return (
        
        <div >
            {user ? ( <>
              <HeaderLogin />
              <Equipment user = {user}/>
              </>
              

      

    ) : (

      <HeaderLogout/>

    )}
          {user  ? (<div className="container">
                  <h1>Jesteś pewien?</h1>
                   <button onClick={logout}>Tak</button>
                   <button>Nie</button>


          </div>
          ) : (
            
            // <div className="container" >
              <form onSubmit={handleSubmit}>
                <h1 className="formTitle">Login</h1>
                <br />
                <input
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="current-password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="submitButton">
                  Login
                </button>
              </form>
            // </div>
          )}
        </div>
      );
    }
