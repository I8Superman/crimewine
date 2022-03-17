import './Vin.scss';

import { useState } from 'react';

import Modal from '../../Modal/Modal';

// import minus from '../../../assets/svgs/minus.svg';
// import minusDisabled from '../../../assets/svgs/minus-disabled.svg';
// import plus from '../../../assets/svgs/plus.svg';

export default function Vin({ bottleData, addToBasketFunc }) {

    // const addToBasket = addToBasketFunc;
    const [quantity, setQuantity] = useState(1);

    const [bounce, setBounce] = useState(0);

    const [showModal, setShowModal] = useState(false);

    function adjustQuantity(e, adjustment) { // Using the +/- buttons
        e.stopPropagation(); // Stops event from bubbling or triggering the toggleModal function
        const newAmount = quantity + adjustment;
        setQuantity(newAmount);
    }

    function manualAdjustQty(e) { // Writing it directly in the qty input field
        const textToNumber = Number(e.target.value);
        if (!Number.isNaN(textToNumber)) { // Check is pressed key is (not not) a number
            setQuantity(textToNumber);
        } else {
            alert('That wasnt a number dude!')
        }
    }

    function laegIKurv(e) {
        e.stopPropagation(); // Stops event from bubbling or triggering the toggleModal function
        setBounce(1);
        addToBasketFunc(quantity, bottleData);
        setQuantity(1); // Resets qty to 1, so previous numbers don't linger
    }

    function openModal() {
        setShowModal(true);
    }

    function closeModal(e) {
        e.stopPropagation()
        if (e.target.dataset.close === 'yes') {
            setShowModal(false);
            document.body.style.overflow = 'unset'; // Enables scrolling on the body again
        }
    }

    // console.log('Vin rendered')

    return (
        <>
            <div className="c-vin" onClick={() => openModal()}>
                {/* <img className="c-vin__img" src={require(`../../../assets/images/wine-bottles/cropped/${bottleData.img}.png`).default} alt="" /> */}
                <img className="c-vin__img" src={`images/cropped/${bottleData.img}.png`} alt="" />
                <div className="c-vin__name">
                    <div className="c-vin__name__text">{bottleData.name}</div>
                </div>
                <p className='c-vin__data'>{bottleData.producer.short} - {bottleData.year}</p>
                <p className='c-vin__price'>{bottleData.price.bottle} / {bottleData.price.box} DKK</p>
                <div className='c-vin__ctrls'>
                    {/* <div className='c-vin__ctrls__adjust'> */}
                    <button className='c-vin__ctrls__minus' onClick={(e) => adjustQuantity(e, -1)} disabled={quantity <= 1}><p>-</p></button>
                    <input className='c-vin__ctrls__input' type="text" value={quantity} onClick={(e) => e.stopPropagation()} onChange={(e) => manualAdjustQty(e)} />
                    <button className='c-vin__ctrls__plus' onClick={(e) => adjustQuantity(e, +1)}><p>+</p></button>
                    <button className='c-vin__ctrls__add' onClick={(e) => laegIKurv(e)} onAnimationEnd={() => setBounce(0)} bounce={bounce}>Læg i kurv</button>
                </div>
            </div>
            {showModal && <Modal bottleInfo={bottleData} closeModal={(e) => closeModal(e)} />}
        </>
    );
}