import React  from 'react';
import {NavLink} from "react-router-dom";



export const Header = () => {

  return (
    <>
        <header>
                <NavLink  to="/"><h1>PomodoroEq</h1></NavLink>

        {/* <NavLink  to="/callendar">Callendar</NavLink> */}
        {/* <NavLink  to="/history">History</NavLink> */}

        <NavLink  to="/registration">Sign up</NavLink>
        <NavLink  to="/login">Log in</NavLink>

        <NavLink  to="/logout">Logout</NavLink>

      </header>

    </>
);

}

