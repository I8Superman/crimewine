import './Modal.scss';

import { createPortal } from 'react-dom';

import closeX from '../../assets/svgs/close-x.svg';

export default function Modal(props) {

    console.log(props)
    const info = props.bottleInfo;

    // console.log('Modal rendered!')

    // Pevent background scrolling while modal is open:
    if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }


    return (
        createPortal(
            <div className="c-modal" data-close="yes" onClick={props.closeModal}>
                <div className="c-modal__container">
                    <div className="c-modal__container__close-button" data-close="yes" onClick={props.closeModal}>
                        <img src={closeX} alt="" className="c-modal__container__close-button__img" />
                    </div>
                    <div className="c-modal__container__image" style={{
                        backgroundImage: `url(images/cropped/${info.img}.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                    <div className="c-modal__container__description">
                        <h3 className="c-modal__container__description__name"><span>{info.name}</span></h3>
                        <p className="c-modal__container__description__text">{info.description}</p>
                        <h3 className="c-modal__container__description__price">Prices here</h3>
                    </div>
                    <div className="c-modal__container__data">
                        <p className="c-modal__container__data__line"><strong>Vingård: </strong>{info.producer.full}</p>
                        <p className="c-modal__container__data__line"><strong>Drue: </strong>{info.grapes}</p>
                        <p className="c-modal__container__data__line"><strong>God til: </strong>{info.goodwith}</p>
                        <p className="c-modal__container__data__line"><strong>Alkohol: </strong>{info.alcohol}</p>
                        <p className="c-modal__container__data__line"><strong>Serveringstemperatur: </strong>{info.serv_temp}</p>
                        <p className="c-modal__container__data__line"><strong>På lager: </strong>{info.stock}</p>
                        {info.notes && <p><strong>Noter: </strong>{info.notes}</p>}
                    </div>
                </div>
            </div>,
            document.body)
    )
}