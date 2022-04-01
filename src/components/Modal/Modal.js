import './Modal.scss';

import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import closeX from '../../assets/svgs/close-x.svg';
import { BasketContext } from '../../contexts/BasketContext';


export default function Modal(props) {

    const { addToBasket } = useContext(BasketContext);

    const { quantity, setQuantity, total } = props.qty;

    const [bounce, setBounce] = useState(0);

    // Pevent background scrolling while modal is open:
    if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }

    // Basket functions (same as in Vin.js)
    function adjustQuantity(adjustment) { // Using the +/- buttons
        const newAmount = quantity + adjustment;
        setQuantity(newAmount);
    }

    function manualAdjustQty(event) { // Writing it directly in the qty input field
        const textToNumber = Number(event.target.value);
        if (!Number.isNaN(textToNumber)) { // Check is pressed key is (not not) a number
            setQuantity(textToNumber);
        } else {
            alert('That wasnt a number dude!')
        }
    }

    function laegIKurv(e) {
        e.stopPropagation(); // Stops event from bubbling or triggering the toggleModal function
        setBounce(1);
        addToBasket(quantity, props.bottleInfo);
        setQuantity(1); // Resets qty to 1, so previous numbers don't linger
    }

    console.log(quantity)
    return (
        createPortal(
            <div className="c-modal" data-close="yes" onClick={props.closeModal}>
                <div className="c-modal__container">
                    <div className="c-modal__container__close-button" data-close="yes" onClick={props.closeModal}>
                        <img src={closeX} alt="" className="c-modal__container__close-button__img" />
                    </div>
                    <div className="c-modal__container__image" style={{
                        backgroundImage: `url(images/cropped/${props.bottleInfo.img}.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                    <div className="c-modal__container__description">
                        <h3 className="c-modal__container__description__name"><span>{props.bottleInfo.name}</span></h3>
                        <p className="c-modal__container__description__text">{props.bottleInfo.description}</p>
                        <p className="c-modal__container__description__price">{props.bottleInfo.price.bottle} DKK / {props.bottleInfo.price.box} DKK (6 fl.)</p>
                    </div>
                    <div className="c-modal__container__data">
                        <p className="c-modal__container__data__line"><strong>Vingård: </strong>{props.bottleInfo.producer.full}</p>
                        <p className="c-modal__container__data__line"><strong>Drue: </strong>{props.bottleInfo.grapes}</p>
                        <p className="c-modal__container__data__line"><strong>God til: </strong>{props.bottleInfo.goodwith}</p>
                        <p className="c-modal__container__data__line"><strong>Alkohol: </strong>{props.bottleInfo.alcohol}</p>
                        <p className="c-modal__container__data__line"><strong>Serveringstemperatur: </strong>{props.bottleInfo.serv_temp}</p>
                        <p className="c-modal__container__data__line"><strong>På lager: </strong>{props.bottleInfo.stock}</p>
                        {props.bottleInfo.notes && <p><strong>Noter: </strong>{props.bottleInfo.notes}</p>}

                        <div className='c-modal__container__data__ctrls'>
                            {/* <div className='c-modal__ctrls__adjust'> */}
                            <button className='c-modal__container__data__ctrls__minus' onClick={() => adjustQuantity(-1)} disabled={quantity <= 1}><p>-</p></button>
                            <input className='c-modal__container__data__ctrls__input' type="text" value={quantity} onChange={manualAdjustQty} />
                            <button className='c-modal__container__data__ctrls__plus' onClick={() => adjustQuantity(+1)}><p>+</p></button>
                            {props.openedFromBasket === false && <button className='c-modal__container__data__ctrls__add' onClick={(e) => laegIKurv(e)} onAnimationEnd={() => setBounce(0)} bounce={bounce}>Læg i kurv</button>}
                            {props.openedFromBasket === true && <div className='c-modal__container__data__ctrls__price'>I alt: {total} DKK</div>}
                        </div>

                    </div>
                </div>
            </div>,
            document.body)
    )
}