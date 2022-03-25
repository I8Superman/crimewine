
import { useState } from 'react';

import Modal from '../../../Modal/Modal';

export default function NyFlaske(props) {

    const bottleData = props.bottleData;

    const [showModal, setShowModal] = useState(false);

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


    return (
        <div className="c-newwine__wines__product" onClick={() => openModal()}>
            <div className="c-newwine__wines__product__image">
                <img className="c-newwine__wines__product__image__img" src={`images/cropped/${bottleData.img}.png`} alt="" />
                <div className="c-newwine__wines__product__image__data">
                    <div className="c-newwine__wines__product__image__data__producer">{bottleData.producer.full}:</div>
                    <div className="c-newwine__wines__product__image__data__name">{bottleData.name}</div>
                    <div className="c-newwine__wines__product__image__data__year">2019</div>
                </div>
            </div>
            <div className="c-newwine__wines__product__text">
                <p className="c-newwine__wines__product__text__description">{bottleData.description}</p>
                <p className="c-newwine__wines__product__text__price">{bottleData.price.bottle} / {bottleData.price.box} DKK</p>
            </div>
            {showModal && <Modal bottleInfo={bottleData} closeModal={(e) => closeModal(e)} />}
        </div>
    );
}
