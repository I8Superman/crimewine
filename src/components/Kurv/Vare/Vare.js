import './Vare.scss';

import { useContext, useState } from 'react';

import minus from '../../../assets/svgs/minus.svg';
import minusDisabled from '../../../assets/svgs/minus-disabled.svg';
import plus from '../../../assets/svgs/plus.svg';
import { BasketContext } from '../../../contexts/BasketContext';


export default function Vare(props) {

    const wineData = props.basketWineData; // Simplifyig the data object name
    // const addToBasket = addToBasketFunc;
    const [quantity, setQuantity] = useState(wineData.qty);

    function adjustQuantity(adjustment) { // Using the +/- buttons
        const newAmount = quantity + adjustment;
        setQuantity(newAmount);
    }

    function manualAdjustQty(event) { // Writing it directly in the qty input field
        const textToNumber = Number(event.target.value);
        if (!Number.isNaN(textToNumber)) {
            setQuantity(textToNumber);
        } else {
            console.log('That wasnt a number dude!')
        }
    }

    return (
        <div className='c-vare'>
            <div className='c-vare__bottle o-col'>
                <img className='c-vare__bottle__img' src={`images/thumbnails/thumbnail-${wineData.img}.jpg`} alt="" />
            </div>
            <div className='c-vare__info o-col'>
                <p className='c-vare__info__navn'>{wineData.name}</p>
                <p className='c-vare__info__data'>{wineData.producer.short} - {wineData.year}</p>
                <p className='c-vare__info__type'>{wineData.type}</p>
            </div>
            <div className='c-vare__inventory o-col'>{wineData.stock} fl.</div>
            <div className='c-vare__price o-col'>{wineData.price.bottle} / {wineData.price.box} DKK</div>
            <div className='c-vare__adjust o-col'>
                <div className='c-vare__adjust'>
                    <button className='c-vare__adjust__minus' onClick={() => adjustQuantity(-1)} disabled={quantity <= 1}><img src={quantity <= 1 ? minusDisabled : minus} alt="" /></button>
                    <input className='c-vare__adjust__input' type="text" value={quantity} onChange={manualAdjustQty} />
                    <button className='c-vare__adjust__plus' onClick={() => adjustQuantity(+1)}><img src={plus} alt="" /></button>
                </div>
            </div>
            <div className='c-vare__discount o-col'>74,00 DKK</div>
            <div className='c-vare__total o-col'>1.358,00 DKK</div>
        </div>
    )
}