import './Filters.scss';

import asc from '../../assets/svgs/sort-asc.svg'
import desc from '../../assets/svgs/sort-desc.svg'

export default function Filters(props) {
    const filters = props.filters
    // console.log(filters)
    return (
        <div className="c-filters">
            <ul className="c-filters__cat">
                <li className={filters.type.alle ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="alle" onClick={e => props.toggleFilter(e)}>{filters.type.alle ? 'Fravælg alle' : 'Alle vine'}</li>
                <li className="c-filters__cat__filter">Nyheder</li>
                <li className="c-filters__cat__filter">Favoritter</li>
            </ul>
            <ul className='c-filters__cat'>
                <li className={filters.type.hvid ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="hvid" onClick={e => props.toggleFilter(e)}>Hvidvin</li>
                <li className={filters.type.rose ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="rose" onClick={e => props.toggleFilter(e)}>Rosé</li>
                <li className={filters.type.roed ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="roed" onClick={e => props.toggleFilter(e)}>Rødvin</li>
                <li className={filters.type.sekt ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="sekt" onClick={e => props.toggleFilter(e)}>Sekt</li>
                <li className={filters.type.dessert ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="dessert" onClick={e => props.toggleFilter(e)}>Dessertvin</li>
            </ul>
            <ul className='c-filters__cat'>
                <li className={filters.sort === 'pris' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="pris" onClick={e => props.toggleFilter(e)}>Pris{filters.sort === 'pris' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
                <li className={filters.sort === 'aar' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="aar" onClick={e => props.toggleFilter(e)}>År{filters.sort === 'aar' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
                <li className={filters.sort === 'alkohol' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="alkohol" onClick={e => props.toggleFilter(e)}>Alkohol{filters.sort === 'alkohol' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
                <li className={filters.sort === 'drue' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="drue" onClick={e => props.toggleFilter(e)}>Drue{filters.sort === 'drue' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
            </ul>
        </div>
    )
}

