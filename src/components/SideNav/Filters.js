import './Filters.scss';

export default function Filters(props) {
    return (
        <div className="c-filters">
            <ul className="c-filters__cat">
                <li className="c-filters__cat__filter" data-key="producent" data-subkey="alle" onClick={e => props.toggleFilter(e)}>Alle vine</li>
                <li className="c-filters__cat__filter">Nyheder</li>
                <li className="c-filters__cat__filter">Favoritter</li>
            </ul>
            <ul className='c-filters__cat'>
                <li className="c-filters__cat__filter" data-key="type" data-subkey="hvid" onClick={e => props.toggleFilter(e)}>Hvidvin</li>
                <li className="c-filters__cat__filter" data-key="type" data-subkey="rose" onClick={e => props.toggleFilter(e)}>Rosé</li>
                <li className="c-filters__cat__filter" data-key="type" data-subkey="roed" onClick={e => props.toggleFilter(e)}>Rødvin</li>
                <li className="c-filters__cat__filter" data-key="type" data-subkey="sekt" onClick={e => props.toggleFilter(e)}>Sekt</li>
                <li className="c-filters__cat__filter" data-key="type" data-subkey="dessert" onClick={e => props.toggleFilter(e)}>Dessertvin</li>
            </ul>
            <ul className='c-filters__cat'>
                <li className="c-filters__cat__filter">Pris</li>
                <li className="c-filters__cat__filter">År</li>
                <li className="c-filters__cat__filter">Alkohol</li>
                <li className="c-filters__cat__filter">Drue</li>
            </ul>
        </div>
    )
}