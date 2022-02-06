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
                {/* <li className="c-filters__cat__filter">Nyheder</li> */}
                {/* <li className="c-filters__cat__filter">Favoritter</li> */}
            </ul>
            <ul className='c-filters__cat'>
                <li className={filters.type.hvid ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="hvid" onClick={e => props.toggleFilter(e)}>Hvidvin</li>
                <li className={filters.type.rose ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="rose" onClick={e => props.toggleFilter(e)}>Rosé</li>
                <li className={filters.type.roed ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="roed" onClick={e => props.toggleFilter(e)}>Rødvin</li>
                <li className={filters.type.sekt ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="sekt" onClick={e => props.toggleFilter(e)}>Sekt</li>
                <li className={filters.type.dessert ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="type" data-subkey="dessert" onClick={e => props.toggleFilter(e)}>Dessertvin</li>
            </ul>
            <ul className='c-filters__cat'>
                <li className={filters.sort === 'price' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="price" onClick={e => props.toggleFilter(e)}>Pris{filters.sort === 'price' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
                <li className={filters.sort === 'year' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="year" onClick={e => props.toggleFilter(e)}>År{filters.sort === 'year' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
                <li className={filters.sort === 'alcohol' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="alcohol" onClick={e => props.toggleFilter(e)}>Alkohol{filters.sort === 'alcohol' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
                <li className={filters.sort === 'grapes' ? "c-filters__cat__filter--selected" : "c-filters__cat__filter"} data-key="sort" data-subkey="grapes" onClick={e => props.toggleFilter(e)}>Drue{filters.sort === 'grapes' && <img src={filters.sortDir === 'asc' ? asc : desc} alt="" />}</li>
            </ul>
        </div>
    )
}

