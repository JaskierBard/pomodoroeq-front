import React from "react";
import { HeaderLogin } from "../components/Header/HeaderLogin";
import { HeaderLogout } from "../components/Header/HeaderLogout";

export const NotFoundViewLoggedOut = () => (
    <>
        <h1 style={{position:"absolute", marginLeft:'170px', marginTop:'100px'}}>Zgubiłeś się? Spróbuj się zalogować lub utworzyć konto</h1>
    </>
)

export const NotFoundViewLoggedIn = () => (
    <>
        <h1 style={{position:"absolute", marginLeft:'170px', marginTop:'100px'}}>Pomidory cię obserwują... Lepiej wróć na podstronę dla użytkowników.</h1>
    </>
)
    



