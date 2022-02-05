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

  const [basket, setBasket] = useState([]);
  const [navFilters, setNavFilters] = useState({
    type: {
      alle: true,
      hvid: false,
      roed: true,
      rose: true,
      dessert: true,
      sekt: true
    }
  });

  function addToBasket(qty, data) { // Passed as props to Vine and Vin components
    const alreadyInBasket = basket.findIndex((wine) => wine.id === data.id);
    if (alreadyInBasket === -1) {
      const addedItem = {
        ...data,
        qty: qty
      }
      setBasket(prevState => [...prevState, addedItem])
    } else {
      const updatedBasket = basket.map((wine) => {
        if (wine.id === data.id) {
          wine.qty += qty;
        }
        return wine;
      });
      setBasket(updatedBasket);
    }
  }

  function toggleNavFilter(e) {
    console.log('NavFilter toggled')
    // let key = e.target.dataset.key;
    let subkey = e.target.dataset.subkey;

    setNavFilters(prevNavFilters => {
      return {
        ...prevNavFilters,
        type: {
          ...prevNavFilters.type,
          [subkey]: !prevNavFilters.type[subkey]
        }
      }
    });
  }


  for (let wine = 0; wine < basket.length; wine++) {
    console.log(basket[wine].name, 'qty: ' + basket[wine].qty);
  }

  // console.log('App.js rendered!')
  // console.log(navFilters)

  return (
    <div className="c-app">
      <BasketContext.Provider value={{ basket, setBasket }}>
        <SideNav toggleNavFilter={toggleNavFilter} />
        <Logo />
        <BasketIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nyheder" element={<Nyheder />} />
          <Route path="/vine" element={<Vine addToBasketFunc={addToBasket} navFilters={navFilters} />} />
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


