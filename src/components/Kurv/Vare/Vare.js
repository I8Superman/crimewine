import './Vare.scss';

import bottleImg from '../../../assets/images/wine-bottles/thumbnails/thumbnail-hvid8.jpg'
import minus from '../../../assets/svgs/minus.svg';
import plus from '../../../assets/svgs/plus.svg';

export default function Vare() {
    return (
        <div className='c-vare'>
            <div className='c-vare__bottle o-col'>
                <img className='c-vare__bottle__img' src={bottleImg} alt="" />
            </div>
            <div className='c-vare__info o-col'>
                <p className='c-vare__info__navn'>Weissburgunder Scherben</p>
                <p className='c-vare__info__data'>Keller - 2020</p>
                <p className='c-vare__info__type'>Hvidvin</p>
            </div>
            <div className='c-vare__inventory o-col'>47 fl.</div>
            <div className='c-vare__price o-col'>179,00 / 1.000,00 DKK</div>
            <div className='c-vare__adjust o-col'>
                <div className='c-vare__adjust-ctrl'>
                    <button className='c-vare__adjust-ctrl__minus'><img src={minus} alt="" /></button>
                    <input className='c-vare__adjust-ctrl__input' type="text" placeholder="1" />
                    <button className='c-vare__adjust-ctrl__plus'><img src={plus} alt="" /></button>
                </div>
            </div>
            <div className='c-vare__discount o-col'>74,00 DKK</div>
            <div className='c-vare__total o-col'>1.358,00 DKK</div>
        </div>
    )
}