import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
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
        const res = await axios.post("http://localhost:3001/user/refresh", { token: user.refreshToken, id:user.userId });
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

      const axiosJWT = axios.create()
          axiosJWT.interceptors.request.use(
            async (config) => {
              let currentDate = new Date();
              setDecodedToken(jwt_decode(user.accessToken)) ;
      
              if (decodedToken.exp * 1000 < currentDate.getTime()) {
                const data = await refreshToken();
                config.headers["authorization"] = "Bearer " + data.accessToken;
              }
              return config;
            },
            (error) => {
              return Promise.reject(error);
            }
          );


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3001/user/login", { username, password });
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
          await axios.delete("http://localhost:3001/user/logout" , 
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
          {user  ? (<div className="container">
                  <h1>Jesteś pewien?</h1>
                   <button onClick={logout}>Tak</button>
                   <button>Nie</button>


          </div>
          ) : (
            <div className="form">
              <form onSubmit={handleSubmit}>
                <h1 className="formTitle">Login</h1>
                <br />
                <input
                  type="text"
                  placeholder="nazwa użytkownika"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="current-password"
                  placeholder="hasło"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="submitButton">
                  Login
                </button>
              </form>
              </div>
          )}
        </div>
      );
    }
