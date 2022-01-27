import './Vine.scss';

import { useEffect, useState } from 'react';

import vinData from '../../assets/sim-data/wineData'
import Vin from './Vin/Vin';

export default function Vine() {

    const [allWines, setAllWines] = useState([]);

    useEffect(() => {
        setAllWines(vinData.data.wines)
    }, []);

    // console.log(allWines);

    const wineBottles = allWines.map((bottle, index) => {
        return <Vin key={index} bottleData={bottle} />
    })

    return (
        <div className="p-vine">
            <div className="c-producer-btns">
                {/* These should be generated based on the producer values in the data */}
                <button className="c-producer-btn" onClick={() => console.log('hello')}>Keller</button>
                <button className="c-producer-btn">Höfflin</button>
                <button className="c-producer-btn">Bercher</button>
                <button className="c-producer-btn">Königsschaffhausen</button>
                <button className="c-producer-btn">Fogt</button>
                <button className="c-producer-btn">Klotz</button>
                <button className="c-producer-btn">Schumann</button>
                <button className="c-producer-btn">Franz Keller</button>
                <button className="c-producer-btn">Pix</button>
            </div>
            <div className="c-products-container">
                {wineBottles}
            </div>
        </div>
    )
}

// Producer categories
// Filter categories (under Vine menu item)
// Product container
  // Single wine
    // name
    // img
    // Producer
    // Year
    // Price
