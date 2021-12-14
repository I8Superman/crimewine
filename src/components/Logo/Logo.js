import './Logo.scss';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import crimewineLogo from '../../assets/svgs/crimewine-logo.svg';

export default function Logo() {

    let location = useLocation();

    return (
        <div className={`c-logo ${location.pathname !== '/' && 'c-logo--shrunk'}`}>
            <Link to="/">
                <img className="c-logo__img" src={crimewineLogo} alt="crimewine logo" />
            </Link>
            {location.pathname === '/' && <h1 className='c-logo__subtext'>Tysk vin fra Baden</h1>}
        </div>
    );
}