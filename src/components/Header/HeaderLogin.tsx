import React, { useEffect, useState }  from 'react';
import {NavLink} from "react-router-dom";
import { Equipment } from '../Equipment/Equipment';



export const HeaderLogin = () => {


  return (
    <>
        <header>
          <NavLink  to="/"><h1>PomodoroEq</h1></NavLink>
          <NavLink  to="/market">Market</NavLink>
          <NavLink  to="/history">Historia</NavLink>
          

          <NavLink  to="/login">Wyloguj</NavLink>
      </header>
      <Equipment/>



    </>
);

}

