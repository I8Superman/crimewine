import './Vine.scss';

import { useEffect, useState } from 'react';

import vinData from '../../assets/sim-data/wineData'
import Vin from './Vin/Vin';

export default function Vine(props) {

    const [allWines, setAllWines] = useState([]);
    // const [sorting, setSorting] = useState('');
    const [filters, setFilters] = useState({
        type: {
            alle: true,
            hvid: false,
            roed: true,
            rose: true,
            dessert: true,
            sekt: true
        },
        producent: {
            alle: true,
            keller: true,
            hoefflin: true,
            bercher: true,
            konigsschaffhausen: true,
            fogt: true,
            schumann: true,
            franzkeller: true,
        }
    });

    function toggleFilter(e) {
        let key = e.target.dataset.key;
        let subkey = e.target.dataset.subkey;
        setFilters(prevFilters => {
            return { // Jesus! Setting state on nested keys is a nightmare!
                ...prevFilters,
                [key]: {
                    ...prevFilters[key],
                    [subkey]: !prevFilters[key][subkey]
                }
            }
        });
    }

    useEffect(() => { // Getting the 'data'
        // console.log('Setting ALL wines')
        setAllWines(vinData.data.wines);
    }, []);

    useEffect(() => {
        setFilters(prevFilters => {
            return {
                ...prevFilters,
                type: props.navFilters.type
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const appliedFilters = allWines.filter(wine =>
        // (filters.type.hvid && wine.type === "Hvid") ||
        // (filters.type.roed && wine.type === "Roed") ||
        // (filters.type.rose && wine.type === "Rose") ||
        // (filters.type.dessert && wine.type === "Dessertvin") ||
        // (filters.type.sekt && wine.type === "Sekt") ||
        (filters.producent.keller && wine.producer.short === "Keller") ||
        (filters.producent.hoefflin && wine.producer.short === "Höfflin") ||
        (filters.producent.bercher && wine.producer.short === "Bercher") ||
        (filters.producent.konigsschaffhausen && wine.producer.short === "Königschaffhausen") ||
        (filters.producent.fogt && wine.producer.short === "Fogt") ||
        (filters.producent.klotz && wine.producer.short === "Klotz") ||
        (filters.producent.schumann && wine.producer.short === "Schumann") ||
        (filters.producent.franzkeller && wine.producer.short === "Franz Keller")
    )

    const wineBottles = appliedFilters.map((bottle) => {
        return <Vin key={bottle.id} bottleData={bottle} addToBasketFunc={props.addToBasketFunc} />
    })

    // console.log(allWines);
    console.log(filters.type);

    return (
        <div className="p-vine">
            <div className="c-producer-btns">
                {/* These should be generated based on the producer values in the data */}
                <button className={filters.producent.alle ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="alle" onClick={e => toggleFilter(e)}>{filters.producent.alle ? 'Fravælg alle' : 'Vælg alle'}</button>
                <button className={filters.producent.keller ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="keller" onClick={e => toggleFilter(e)}>Keller</button>
                <button className={filters.producent.hoefflin ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="hoefflin" onClick={e => toggleFilter(e)}>Höfflin</button>
                <button className={filters.producent.bercher ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="bercher" onClick={e => toggleFilter(e)}>Bercher</button>
                <button className={filters.producent.konigsschaffhausen ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="konigsschaffhausen" onClick={e => toggleFilter(e)}>Königsschaffhausen</button>
                <button className={filters.producent.fogt ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="fogt" onClick={e => toggleFilter(e)}>Fogt</button>
                <button className={filters.producent.schumann ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="schumann" onClick={e => toggleFilter(e)}>Schumann</button>
                <button className={filters.producent.franzkeller ? "c-producer-btn--selected" : "c-producer-btn"} data-key="producent" data-subkey="franzkeller" onClick={e => toggleFilter(e)}>Klotz (Franz Keller)</button>
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
