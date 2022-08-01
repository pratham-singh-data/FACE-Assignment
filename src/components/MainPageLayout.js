import React, { useState } from 'react'
import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Header } from './Header'

export const MainPageLayout = () => {
    const [login, setLogin] = useState(true);

  return (
    <div>
        <Header login={login} setLogin={setLogin}/>
        <Routes>
            <Route path="/" element={<Home login={login}/>}/>
            <Route path="/login" element={<Login login={login} setLogin={setLogin} />}/>
        </Routes>
    </div>
  )
}
