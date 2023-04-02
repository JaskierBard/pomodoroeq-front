import React  from 'react';
import {NavLink} from "react-router-dom";



export const HeaderLogin = () => {

  return (
    <>
        <header>
          <NavLink  to="/"><h1>PomodoroEq</h1></NavLink>
          <NavLink  to="/market">Market</NavLink>
          <NavLink  to="/logout">Logout</NavLink>
          <div>100<img src="./assets/images/coin.png" alt="" /></div>
      </header>

    </>
);

}

