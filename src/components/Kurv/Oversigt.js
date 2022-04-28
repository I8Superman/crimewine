import { useContext, useEffect, useState } from 'react';
import { Fragment } from "react/cjs/react.production.min";

import dankort from '../../assets/images/payment-logos/logo-dankort.png';
import mastercard from '../../assets/images/payment-logos/logo-mastercard.png';
import mobilePay from '../../assets/images/payment-logos/logo-mobile-pay.png';
import visa from '../../assets/images/payment-logos/logo-visa.png';
import { BasketContext } from '../../contexts/BasketContext';
import Vare from './Vare/Vare';

export default function Oversigt(props) {
    const { basket } = useContext(BasketContext);
    const [totalPrice, setTotalPrice] = useState(0)

    const winesInBasket = basket.map((wine) => {
        return <Vare key={wine.id} addToBasketFunc={props.addToBasketFunc} basketWineData={wine} />
    })

    // This probably don't have to be a useEffect?? Creates too many re-renders!
    useEffect(() => {
        let runningTotal = 0;
        basket.forEach((wine) => {
            const nrOfBoxes = Math.floor(wine.qty / 6);
            const nrOfBottles = wine.qty - (nrOfBoxes * 6);
            const total = nrOfBoxes * wine.price.box + nrOfBottles * wine.price.bottle;
            runningTotal = runningTotal + total;
        });
        setTotalPrice(runningTotal);
    }, [basket]);

    console.log('Oversigt rendered');

    return (
        <Fragment>
            <div className="c-kurv__breadcrumbs-and-order-btn">
                <div className="c-kurv__breadcrumbs">
                    <p className='c-kurv__breadcrumbs__indkøbskurv'>Indkøbskurv</p>
                    <p className='c-kurv__breadcrumbs__information'>{'> Information og forsendelse'}</p>
                    <p className='c-kurv__breadcrumbs__betal'>{'> Godkend og betal'}</p>
                </div>
                <button className='c-kurv__summary__ordering__go-to__top order-button'>Til bestilling</button>
            </div>
            <div className='c-kurv__headers'>
                <div className="c-kurv__header">Varer</div>
                <div className="c-kurv__header">På lager</div>
                <div className="c-kurv__header">Pris fl. / 6 fl.</div>
                <div className="c-kurv__header">Antal</div>
                <div className="c-kurv__header">Rabat</div>
                <div className="c-kurv__header">I alt</div>
            </div>
            <div className="c-kurv__vare-container">
                {winesInBasket}
            </div>
            <div className="c-kurv__summary">
                <div className="c-kurv__summary__amount">
                    <p className="c-kurv__summary__amount__text">Samlet beløb:</p>
                    <p className="c-kurv__summary__amount__number">{totalPrice} DKK</p>
                </div>
                <div className="c-kurv__summary__tax">
                    <p className="c-kurv__summary__tax__text">Heraf moms:</p>
                    <p className="c-kurv__summary__tax__number">{(totalPrice * 0.25).toFixed(2)} DKK</p>
                </div>
                <div className="c-kurv__summary__total">
                    <p className="c-kurv__summary__total__text">Total:</p>
                    <p className="c-kurv__summary__total__number">{totalPrice} DKK</p>
                </div>
                <div className="c-kurv__summary__ordering">
                    <div className='c-kurv__summary__ordering__accept'>
                        <p>Vi tager imod:</p>
                        <img className='c-kurv__summary__ordering__accept__payment-logo' src={dankort} alt="" />
                        <img className='c-kurv__summary__ordering__accept__payment-logo' src={visa} alt="" />
                        <img className='c-kurv__summary__ordering__accept__payment-logo' src={mastercard} alt="" />
                        <img className='c-kurv__summary__ordering__accept__payment-logo' src={mobilePay} alt="" />
                    </div>
                    <button className='c-kurv__summary__ordering__go-to order-button'>Til bestilling</button>
                </div>
            </div>
        </Fragment>
    )
}