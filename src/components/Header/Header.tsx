import React  from 'react';
import {NavLink} from "react-router-dom";



export const Header = () => {

  return (
    <>
        <header>
        <h1>PomodoroEq</h1>
        <NavLink  to="/callendar">Callendar</NavLink>
        <NavLink  to="/registration">Sign up</NavLink>
        <NavLink  to="/login">Log in</NavLink>
      </header>

    </>
);

}

