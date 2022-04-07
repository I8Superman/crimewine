import './Vare.scss';

import { useContext, useState } from 'react';

import closeX from '../../../assets/svgs/close-x.svg';
import minus from '../../../assets/svgs/minus.svg';
import minusDisabled from '../../../assets/svgs/minus-disabled.svg';
import plus from '../../../assets/svgs/plus.svg';
import { BasketContext } from '../../../contexts/BasketContext';
import Modal from '../../Modal/Modal';

export default function Vare(props) {

    const { basket, setBasket } = useContext(BasketContext);
    const thisWine = props.basketWineData; // Simplifyig the data object name


    console.log('Antal ' + thisWine.name + ': ' + thisWine.qty);
    const [quantity, setQuantity] = useState(thisWine.qty);
    const addToBasket = props.addToBasketFunc;
    const [showModal, setShowModal] = useState(false);

    function adjustQuantity(e, adjustment) { // Using the +/- buttons
        e.stopPropagation()
        const newAmount = quantity + adjustment;
        setQuantity(newAmount);
        addToBasket(adjustment, thisWine)
    }

    function manualAdjustQty(event) { // Writing it directly in the qty input field
        const textToNumber = Number(event.target.value);
        if (!Number.isNaN(textToNumber)) {
            setQuantity(textToNumber);
            const updatedBasekt = basket.map((wine) => {
                if (wine.id === thisWine.id) {
                    wine.qty = textToNumber;
                }
                return wine;
            });
            setBasket(updatedBasekt);
        } else {
            alert('Please enter a valid number!')
        }
    }

    function removeProduct(event) {
        setQuantity(0);
    }

    // useEffect(() => {
    //     addToBasket(quantity, thisWine)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [quantity]);

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

    const nrOfBoxes = Math.floor(quantity / 6);
    const nrOfBottles = quantity - (nrOfBoxes * 6);
    const total = nrOfBoxes * thisWine.price.box + nrOfBottles * thisWine.price.bottle;
    const discount = quantity * thisWine.price.bottle - total;


    return (
        <div className='c-vare' onClick={() => openModal()}>
            <div className='c-vare__remove o-col' onClick={(e) => removeProduct(e)}><img src={closeX} alt="" /></div>
            <div className='c-vare__bottle o-col'>
                <img className='c-vare__bottle__img' src={`images/thumbnails/thumbnail-${thisWine.img}.jpg`} alt="" />
            </div>
            <div className='c-vare__info o-col'>
                <p className='c-vare__info__navn'>{thisWine.name}</p>
                <p className='c-vare__info__data'>{thisWine.producer.short} - {thisWine.year}</p>
                <p className='c-vare__info__type'>{thisWine.type}</p>
            </div>
            <div className='c-vare__inventory o-col'>{thisWine.stock} fl.</div>
            <div className='c-vare__price o-col'>{thisWine.price.bottle} / {thisWine.price.box} DKK</div>
            <div className='c-vare__adjust o-col'>
                <div className='c-vare__adjust'>
                    <button className='c-vare__adjust__minus' onClick={(e) => adjustQuantity(e, -1)} disabled={quantity <= 1}><img src={quantity <= 1 ? minusDisabled : minus} alt="" /></button>
                    <input className='c-vare__adjust__input' type="text" value={quantity} onClick={(e) => e.stopPropagation()} onChange={manualAdjustQty} />
                    <button className='c-vare__adjust__plus' onClick={(e) => adjustQuantity(e, +1)}><img src={plus} alt="" /></button>
                </div>
            </div>
            <div className='c-vare__discount o-col'>{discount} DKK</div>
            <div className='c-vare__total o-col'>{total} DKK</div>
            {showModal && <Modal bottleInfo={thisWine} qty={{ quantity, setQuantity, total }} closeModal={(e) => closeModal(e)} openedFromBasket={true} />}
        </div>
    )
}