import './Sidenav.scss';

import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BasketContext } from '../../contexts/BasketContext';
import Filters from './Filters';

export default function SideNav(props) {

    const { basket } = useContext(BasketContext);
    const location = useLocation();

    return (
        <div className='c-side-nav__container'>
            <nav className='c-side-nav'>
                <Link className='c-side-nav__link' to="/nyheder"><span className='c-side-nav__text'>Nyheder</span></Link>
                <Link className='c-side-nav__link' to="/vine"><span className='c-side-nav__text'>Vine</span></Link>
                {location.pathname === '/vine' && <Filters toggleFilter={props.toggleFilter} filters={props.filters} />}
                <Link className='c-side-nav__link' to="/om"><span className='c-side-nav__text'>Om</span></Link>
                <Link className='c-side-nav__link' to="/kontakt"><span className='c-side-nav__text'>Kontakt</span></Link>
                <Link className='c-side-nav__link' to="/kig-forbi"><span className='c-side-nav__text'>Kig forbi</span></Link>
                {basket.length !== 0 && <Link className='c-side-nav__link' to="/kurv"><span className='c-side-nav__text'>Kurv</span></Link>}
            </nav>
        </div>

    );
}