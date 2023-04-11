import axios from "axios";
import React, { FormEvent, useState } from "react";
import jwt_decode from "jwt-decode";


export interface ThisInterface {
    decodedToken: any
}

export const Logout = () => {
//     const [user, setUser] = useState<any>()
//     const [decodedToken, setDecodedToken] = useState<any>()


//     const refreshToken = async () => {
//         try {
//           const res = await axios.post("/logout", { token:null });
//           setUser({
//             ...user,
//           });
//           return res.data;
//         } catch (err) {
//           console.log(err);
//         }
//       };

//     const axiosJWT = axios.create()

//     axiosJWT.interceptors.request.use(
//       async (config) => {
//         let currentDate = new Date();
//         setDecodedToken(jwt_decode(user.accessToken)) ;
//         if (decodedToken.exp * 1000 < currentDate.getTime()) {
//           const data = await refreshToken();
//           config.headers["authorization"] = "Bearer " + null;
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );

    const Logout = async () => {
        try {

        await axios.post("http://localhost:3001/user/logout");
        
        } catch (err) {
          console.log(err);
        }
      };

    return<>
            <button onClick={Logout}>Logout</button>

    </>
        
        
    
};