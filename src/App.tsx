import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import { LogIn } from './components/LogIn/LogIn';
import { NotFoundViewLoggedIn, NotFoundViewLoggedOut } from './views/NotFoundView';

import { getUserId } from './functions/getUserId';
import { HeaderLogin } from './components/Header/HeaderLogin';
import { HeaderLogout } from './components/Header/HeaderLogout';
import { Registration } from './components/Registration/Registration';
import { Clock } from './components/Clock/Clock';
import { BuyProducts } from './components/Market/Buy';
import { SellProducts } from './components/Market/Sell';

export const App = () => {
    const [isUser, setIsUser] = useState<any>(null);

    useEffect(() => {
        setIsUser(getUserId())
        },[isUser]);

    if (isUser) {
        return (
            <>  
                <Routes>
                    <Route path="/clock" element={<Clock/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/buy" element={<BuyProducts/>}/>
                    <Route path="/sell" element={<SellProducts/>}/>
                    <Route path="*" element={<NotFoundViewLoggedIn/>}/>
                </Routes>
                <HeaderLogin/>
                <div className='bgc'>
                </div>
            </>
        );
        
    } else {
        return (
            <>  
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="*" element={<NotFoundViewLoggedOut/>}/>
                </Routes>
                <HeaderLogout/>
                <div className='bgc'>
                </div>
            </>
        );
    };
};

