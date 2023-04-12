import React from 'react';
import {NavLink} from "react-router-dom";

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
    </>
  );
};

