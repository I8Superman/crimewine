import './BasketIcon.scss';

import { Link } from 'react-router-dom';

import basketImg from '../../assets/svgs/basket-bottle.svg'

export default function BasketIcon() {
    return (
        <Link className='c-basket-icon__link' to="/kurv">
            <div className="c-basket-icon__container">
                <img src={basketImg} alt="" className="c-basket-icon__img" />
            </div>
        </Link>
    )
}