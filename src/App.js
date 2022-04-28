import './App.scss';

import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import BasketIcon from './components/BasketIcon/BasketIcon';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import KigForbi from './components/KigForbi/KigForbi';
import Kontakt from './components/Kontakt/Kontakt';
import Betaling from './components/Kurv/Betaling';
import Forsendelse from './components/Kurv/Forsendelse';
import Kurv from './components/Kurv/Kurv';
import Oversigt from './components/Kurv/Oversigt'
import Logo from './components/Logo/Logo';
import Nyheder from './components/Nyheder/Nyheder';
import Om from './components/Om/Om';
import SideNav from './components/SideNav/SideNav';
import Vine from './components/Vine/Vine';
import { BasketContext } from './contexts/BasketContext';
// import { ModalContext } from './contexts/ModalContext';

function App() {

  const [basket, setBasket] = useState(() => {
    const savedBasket = sessionStorage.getItem("basket");
    const initialValue = JSON.parse(savedBasket);
    return initialValue || [];
  });


  // const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    type: {
      alle: true,
      hvid: true,
      roed: true,
      rose: true,
      dessert: true,
      sekt: true
    },
    producent: {
      alle: true,
      keller: true,
      hoefflin: true,
      bercher: true,
      konigsschaffhausen: true,
      fogt: true,
      schumann: true,
      franzkeller: true,
    },
    sort: '',
    sortDir: 'asc'
  });

  useEffect(() => {
    // storing input name
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(qty, data) { // Passed as props to Vine and Vin components
    const alreadyInBasket = basket.findIndex((wine) => wine.id === data.id);
    if (alreadyInBasket === -1) { // If wine NOT in basket, add it and its qty
      const addedItem = {
        ...data,
        qty: qty
      };
      setBasket(prevState => [...prevState, addedItem]);
    } else if (qty === 0) { // If new qty is 0 filter basket and remove wine 
      const updatedBasket = basket.filter(wine => wine.id !== data.id);
      setBasket(updatedBasket);
    } else { // If wine already in basket, update the wine obj qty
      const updatedBasket = basket.map((wine) => {
        if (wine.id === data.id) {
          wine.qty += qty;
        }
        return wine;
      });
      setBasket(updatedBasket);
    }
  }

  // The ONE and ONLY super filter (and sort!) function!
  function toggleFilter(e) {
    let key = e.target.dataset.key;
    let subkey = e.target.dataset.subkey;
    // console.log('key = ' + key, 'subkey = ' + subkey)
    // Handles the sorting values of the filters obj
    if (key === 'sort') {
      console.log('Were sorting things out!')
      const currentSort = filters.sort;
      const currentSortDir = filters.sortDir;

      if (subkey === currentSort && currentSortDir === 'asc') {
        setFilters(prevFilters => {
          return {
            ...prevFilters,
            sortDir: 'desc'
          }
        });
      } else if (subkey === currentSort && currentSortDir === 'desc') {
        setFilters(prevFilters => {
          return {
            ...prevFilters,
            sort: ''
          }
        });
      } else {
        setFilters(prevFilters => {
          return {
            ...prevFilters,
            sort: subkey,
            sortDir: 'asc'
          }
        });
      }
      // Handles the filtering values of the filters obj
    } else if (subkey === 'alle' && filters[key].alle) { // Set all type or producent to false
      let tempObj = filters[key]; // Temp obj to manipulate/mutate
      Object.keys(tempObj).forEach(p => tempObj[p] = false) // Loop through all keys and change their value to false
      setFilters(prevFilters => {
        return {
          ...prevFilters,
          [key]: tempObj // Change the filters state with temp obj
        }
      });
    } else if (subkey === 'alle' && filters[key].alle === false) { // Set all type or producent to true
      let tempObj = filters[key]; // Temp obj to manipulate/mutate
      console.log(tempObj)
      Object.keys(tempObj).forEach(p => tempObj[p] = true) // Loop through all keys and change their value to true
      setFilters(prevFilters => {
        return {
          ...prevFilters,
          [key]: tempObj // Change the filters state with temp obj
        }
      });
    } else { // Toggle individual filter to true/false
      setFilters(prevFilters => {
        return { // Jesus! Setting state on nested keys is a nightmare!
          ...prevFilters,
          [key]: {
            ...prevFilters[key],
            [subkey]: !prevFilters[key][subkey]
          }
        }
      });
    }
  }

  return (
    <div className="c-app">
      <BasketContext.Provider value={{ basket, setBasket, addToBasket }}>
        <SideNav toggleFilter={toggleFilter} filters={filters} />
        <Logo />
        {basket.length !== 0 && <BasketIcon />}
        {/* <ModalContext.Provider value={{ showModal, setShowModal }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nyheder" element={<Nyheder />} />
          <Route path="/vine" element={<Vine addToBasketFunc={addToBasket} toggleFilter={toggleFilter} filters={filters} />} />
          <Route path="/om" element={<Om />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kig-forbi" element={<KigForbi />} />
          <Route path="/kurv" element={<Kurv addToBasketFunc={addToBasket} />}>
            <Route index element={<Oversigt addToBasketFunc={addToBasket} />} />
            <Route path="forsendelse" element={<Forsendelse />} />
            <Route path="betaling" element={<Betaling />} />
          </Route>
        </Routes>
        {/* </ModalContext.Provider> */}
        <Footer />
      </BasketContext.Provider>
    </div>
  );
}

export default App;


