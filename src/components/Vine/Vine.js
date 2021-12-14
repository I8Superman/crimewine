import './Vine.scss';

import Vin from './Vin/Vin'

export default function Vine() {

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
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
                <Vin />
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
