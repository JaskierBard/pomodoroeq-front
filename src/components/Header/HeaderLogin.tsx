import React, { useEffect, useState }  from 'react';
import {NavLink} from "react-router-dom";
import { Equipment } from '../Equipment/Equipment';



export const HeaderLogin = () => {


  return (
    <>
        <header>
          <h1>PomodoroEq</h1>
          <NavLink  to="/clock">Zegar</NavLink>
          <NavLink  to="/market">Market</NavLink>
          <NavLink  to="/history">Historia</NavLink>
          <NavLink  to="/login">Wyloguj</NavLink>
      </header>
      <Equipment/>



    </>
);

}

