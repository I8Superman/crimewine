import './Sidenav.scss';

import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { BasketContext } from '../../contexts/BasketContext';
import Filters from './Filters';

export default function SideNav(props) {

    const { basket } = useContext(BasketContext);
    const location = useLocation();

    return (
        <div className='c-side-nav__container'>
            <nav className='c-side-nav'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'c-side-nav__link selected' : 'c-side-nav__link'
                } to="/nyheder"><span className='c-side-nav__text'>Nyheder</span></NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'c-side-nav__link selected' : 'c-side-nav__link'
                } to="/vine"><span className='c-side-nav__text'>Vine</span></NavLink>
                {location.pathname === '/vine' && <Filters toggleFilter={props.toggleFilter} filters={props.filters} />}
                <NavLink className={({ isActive }) =>
                    isActive ? 'c-side-nav__link selected' : 'c-side-nav__link'
                } to="/om"><span className='c-side-nav__text'>Om</span></NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'c-side-nav__link selected' : 'c-side-nav__link'
                } to="/kontakt"><span className='c-side-nav__text'>Kontakt</span></NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'c-side-nav__link selected' : 'c-side-nav__link'
                } to="/kig-forbi"><span className='c-side-nav__text'>Kig forbi</span></NavLink>
                {basket.length !== 0 && <NavLink className={({ isActive }) => isActive ? 'c-side-nav__link selected' : 'c-side-nav__link'
                } to="/kurv"><span className='c-side-nav__text'>Kurv</span></NavLink>}
            </nav>
        </div >
    );
}