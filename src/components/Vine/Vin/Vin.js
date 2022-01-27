import './Vin.scss';

// import bottleImg from '../../../assets/images/wine-bottles/cropped/hvid9.png'
import minus from '../../../assets/svgs/minus.svg';
import plus from '../../../assets/svgs/plus.svg';

export default function Vin({ bottleData }) {

    console.log(bottleData);

    console.log(bottleData.img)
    // const bottleImg = `../../assets/images/wine-bottles/cropped/${bottleData.img}.png`;

    return (
        <div className="c-vin">
            {/* <img className="c-vin__img" src={require(`../../../assets/images/wine-bottles/cropped/${bottleData.img}.png`).default} alt="" /> */}
            <img className="c-vin__img" src={`images/cropped/${bottleData.img}.png`} alt="" />
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