import './NewWine.scss';

import { useEffect, useState } from 'react';

import BandW1 from '../../../assets/images/bandw-1.jpg';
import BandW2 from '../../../assets/images/bandw-2.jpg';
import BandW3 from '../../../assets/images/bandw-3.jpg';
import vinData from '../../../assets/sim-data/wineData';
import NyFlaske from './NyFlaske/NyFlaske';

export default function NewWine() {

    const [allWines, setAllWines] = useState([]);

    useEffect(() => { // Getting the 'data'
        // console.log('Setting ALL wines')
        setAllWines(vinData.data.wines);
    }, []);

    const newWines = allWines.filter(wine => wine.new === true);

    const displayedWines = newWines.map((wine) => {
        return <NyFlaske key={wine.id} bottleData={wine} />
    });



    return (
        <div className="c-newwine">
            {/* <div className='testdiv-left'></div> */}
            <div className="c-newwine__wines">
                <h1 className="c-newwine__wines__header"><span>Nye vine på lager</span></h1>
                {displayedWines}
            </div>
            {/* <div className='testdiv-right'></div> */}

            <img className="c-newwine__img1" src={BandW1} alt="" />
            <img className="c-newwine__img2" src={BandW2} alt="" />
            <img className="c-newwine__img3" src={BandW3} alt="" />
        </div>
    );
}