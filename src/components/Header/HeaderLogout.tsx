import React  from 'react';
import {NavLink} from "react-router-dom";



export const HeaderLogout = () => {

  return (
    <>
        <header>
            <h1>PomodoroEq</h1>
            <NavLink  to="/registration">Sign up</NavLink>
            <NavLink  to="/login">Log in</NavLink>
      </header>

    </>
);

}

