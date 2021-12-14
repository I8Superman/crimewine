import './App.scss';

import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import KigForbi from './components/KigForbi/KigForbi';
import Kontakt from './components/Kontakt/Kontakt';
import Logo from './components/Logo/Logo';
import Nyheder from './components/Nyheder/Nyheder';
import Om from './components/Om/Om';
import SideNav from './components/SideNav/SideNav';
import Vine from './components/Vine/Vine';

function App() {
  return (
    <div className="c-app">
      <SideNav />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nyheder" element={<Nyheder />} />
        <Route path="/vine" element={<Vine />} />
        <Route path="/om" element={<Om />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/kig-forbi" element={<KigForbi />} />
      </Routes>
    </div>
  );
}

export default App;


