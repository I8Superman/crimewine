import './Vin.scss';

import { useContext, useState } from 'react';

import minus from '../../../assets/svgs/minus.svg';
import minusDisabled from '../../../assets/svgs/minus-disabled.svg';
import plus from '../../../assets/svgs/plus.svg';
import { BasketContext } from '../../../contexts/BasketContext';

export default function Vin({ bottleData }) {

    const { basket, setBasket } = useContext(BasketContext);
    const [quantity, setQuantity] = useState(1);

    function adjustQuantity(adjustment) {
        const newAmount = quantity + adjustment;
        setQuantity(newAmount);
    }

    function manualAdjustQty(event) {

        const textToNumber = Number(event.target.value);
        if (!Number.isNaN(textToNumber)) {
            setQuantity(textToNumber);
        } else {
            console.log('That wasnt a number dude!')
        }
    }

    console.log(quantity)

    return (
        <div className="c-vin">
            {/* <img className="c-vin__img" src={require(`../../../assets/images/wine-bottles/cropped/${bottleData.img}.png`).default} alt="" /> */}
            <img className="c-vin__img" src={`images/cropped/${bottleData.img}.png`} alt="" />
            <div className="c-vin__name">
                <div className="c-vin__name__text">{bottleData.name}</div>
            </div>
            <p className='c-vin__data'>{bottleData.producer.short} - {bottleData.year}</p>
            <p className='c-vin__price'>{bottleData.price.bottle} / {bottleData.price.box} DKK</p>
            <div className='c-vin__ctrls'>
                {/* <div className='c-vin__ctrls__adjust'> */}
                <button className='c-vin__ctrls__minus' onClick={() => adjustQuantity(-1)} disabled={quantity === 1}><img src={quantity === 1 ? minusDisabled : minus} alt="" /></button>
                <input className='c-vin__ctrls__input' type="text" value={quantity} onChange={manualAdjustQty} />
                <button className='c-vin__ctrls__plus' onClick={() => adjustQuantity(+1)}><img src={plus} alt="" /></button>
                <button className='c-vin__ctrls__add'>Læg i kurv</button>
            </div>
        </div >
    )
}