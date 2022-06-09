import './Kurv.scss';

// import { useContext, useEffect, useState } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import { OrderContext } from '../../contexts/OrderContext';
// import Betaling from './Betaling';
// import Forsendelse from './Forsendelse';
// import Oversigt from './Oversigt'

export default function Kurv(props) {

    const [order, setOrder] = useState({
        customerType: 'private',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        zipcode: '',
        city: '',
        country: '',
        phone: '',
        notes: '',
        shippingOption: {
            method: '',
            optionalPickup: {
                place: 'Slikland Valby',
                address: 'Toftegårds Allé 9a, 2500 Valby'
            }
        }
    });

    // const [order, setOrder] = useState(() => {
    //     const savedOrder = sessionStorage.getItem("order");
    //     const initialValue = JSON.parse(savedOrder);
    //     return initialValue || [];
    //   })

    console.log('kurv rendered')

    return (
        <div className='c-kurv'>
            {/* Outlet has a built-in context and provider function! Let's you pass useState const's directly to all paths in the Outlet */}
            <Outlet context={[order, setOrder]} />
        </div>


    )
}