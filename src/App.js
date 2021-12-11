import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Logo from './components/Logo/Logo';
import SideNav from './components/SideNav/SideNav';
import Home from './components/Home/Home';
import Nyheder from './components/Nyheder/Nyheder';
import Vine from './components/Vine/Vine';
import Om from './components/Om/Om';
import Kontakt from './components/Kontakt/Kontakt';
import KigForbi from './components/KigForbi/KigForbi';

function App() {
  return (
    <Router>
      <div className="c-app">
        <Logo />
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nyheder" element={<Nyheder />} />
          <Route path="/vine" element={<Vine />} />
          <Route path="/om" element={<Om />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kig-forbi" element={<KigForbi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


