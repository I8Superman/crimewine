import './Sidenav.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav() {

    const location = useLocation();

    // console.log(location);

    return (
        <div className='c-side-nav__container'>
            <nav className='c-side-nav'>
                <Link className='c-side-nav__link' to="/nyheder"><span className='c-side-nav__text'>Nyheder</span></Link>
                <Link className='c-side-nav__link' to="/vine"><span className='c-side-nav__text'>Vine</span></Link>
                {location.pathname === '/vine' && <h3>Look at me, I render only on this URL!!!</h3>}
                <Link className='c-side-nav__link' to="/om"><span className='c-side-nav__text'>Om</span></Link>
                <Link className='c-side-nav__link' to="/kontakt"><span className='c-side-nav__text'>Kontakt</span></Link>
                <Link className='c-side-nav__link' to="/kig-forbi"><span className='c-side-nav__text'>Kig forbi</span></Link>
            </nav>
        </div>

    );
}