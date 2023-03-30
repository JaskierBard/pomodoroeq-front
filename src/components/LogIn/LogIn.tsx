import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";


export interface ThisInterface {
    decodedToken: any
}

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
          console.log('after refresh token user:' + user.username)
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        // refreshToken() Utworzyć zapytanie pobierające dane do SetUser aby po odświeżeniu strony znów mieć usera i tokeny w nim - zapytanie do bazy?
      },[]);

    const axiosJWT = axios.create()

    axiosJWT.interceptors.request.use(
      async (config) => {
        let currentDate = new Date();
        setDecodedToken(jwt_decode(user.accessToken)) ;
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          const data = await refreshToken();
          config.headers["authorization"] = "Bearer " + data.accessToken;
          console.log('udało się?')
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

          const res = await axios.post("http://localhost:3001/api/login", { username, password });
          console.log(res.data)


          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };

      const admin = async (e:any) => {

        try {
          await axiosJWT.get("http://localhost:3001/api/admin" , {
            headers: { authorization: "Bearer " + user.accessToken },
          });
          console.log('hejo')

        } catch (err) {
          console.log(err)
        }
      };
      
      const logout = async (e:any) => {

        try {
          await axiosJWT.delete("http://localhost:3001/api/logout" , 
          { 
            headers: { authorization: "Bearer " + user.accessToken },
            data: { id: user.userId } }
          );
          setDecodedToken(null)
          setUser(null)
        } catch (err) {
        }
      };

      
      return (
        <div className="container">
          {user ? (
            <div className="home">
              <span>
                Welcome to the <b>{user.isAdmin ? "admin" : "user"}</b> dashboard{" "}
                <b>{user.username}</b>.
              </span>
              <button  onClick={admin}>Hej</button>
              <button  onClick={logout}>Logout</button>

          
          
              
              
            </div>
          ) : (
            
            <div className="login">
              <form onSubmit={handleSubmit}>
                <span className="formTitle">Login</span>
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
                <button type="submit" className="submitButton">
                  Login
                </button>
              </form>
              <button  onClick={admin}>Hej</button>

            </div>
          )}
        </div>
      );
    }
    
    // return {user? ()
    // }: (<form onSubmit={handleSubmit}>
    //     <h1>Login</h1>
    //     <p>
    //     <label>
    //         Name: <br/>
    //         <input 
    //             type="text" 
    //             value={username} 
    //             onChange={(e) => setUsername(e.target.value)}
    //             />
    //     </label>
    //     </p>
    //     <p>
    //     <label>
    //         Password: <br/>
    //         <input 
    //             type="current-password" 
    //             value={password} 
    //             onChange={(e) => setPassword(e.target.value)}
    //             />
    //     </label>
    //     </p>  
        
    //     <button type="submit">Log in</button>
        
    // </form>)
