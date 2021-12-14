import './Vin.scss';

import bottleImg from '../../../assets/images/wine-bottles/rose7.png'
import minus from '../../../assets/svgs/minus.svg';
import plus from '../../../assets/svgs/plus.svg';

export default function Vin() {


    return (
        <div className="c-vin">
            <img className="c-vin__img" src={bottleImg} alt="" />
            <div className="c-vin__name">Müller-Thurgau Endinger Vulkanfelsen - trocken</div>
            <p className='c-vin__data'>Keller - 2020</p>
            <p className='c-vin__price'>89 DKK</p>
            <div className='c-vin__ctrls'>
                {/* <div className='c-vin__ctrls__adjust'> */}
                <button className='c-vin__ctrls__minus'><img src={minus} alt="" /></button>
                <input className='c-vin__ctrls__input' type="text" placeholder="1" />
                <button className='c-vin__ctrls__plus'><img src={plus} alt="" /></button>
                {/* </div> */}
                <button className='c-vin__ctrls__add'>Læg i kurv</button>
            </div>
        </div >
    )
}