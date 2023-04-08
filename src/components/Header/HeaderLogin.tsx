import React, { useEffect, useState }  from 'react';
import {NavLink} from "react-router-dom";
import { Equipment } from '../Equipment/Equipment';



export const HeaderLogin = () => {


  return (
    <>
        <header>
          <h1>PomodoroEq</h1>
          <NavLink  to="/clock">Zegar</NavLink>
          <NavLink  to="/buy">Kup nasiona</NavLink>
          <NavLink  to="/sell">Sprzedaj warzywa</NavLink>
          <NavLink  to="/login">Wyloguj</NavLink>
      </header>
      <Equipment/>



    </>
);

}

