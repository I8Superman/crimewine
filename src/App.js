import './App.scss';

import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import BasketIcon from './components/BasketIcon/BasketIcon';
import Home from './components/Home/Home';
import KigForbi from './components/KigForbi/KigForbi';
import Kontakt from './components/Kontakt/Kontakt';
import Kurv from './components/Kurv/Kurv';
import Logo from './components/Logo/Logo';
import Nyheder from './components/Nyheder/Nyheder';
import Om from './components/Om/Om';
import SideNav from './components/SideNav/SideNav';
import Vine from './components/Vine/Vine';
import { BasketContext } from './contexts/BasketContext';

function App() {

  const [basket, setBasket] = useState(0);

  return (
    <div className="c-app">
      <BasketContext.Provider value={{ basket, setBasket }}>
        <SideNav />
        <Logo />
        <BasketIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nyheder" element={<Nyheder />} />
          <Route path="/vine" element={<Vine />} />
          <Route path="/om" element={<Om />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kig-forbi" element={<KigForbi />} />
          <Route path="/kurv" element={<Kurv />} />
        </Routes>
      </BasketContext.Provider>
    </div>
  );
}

export default App;


