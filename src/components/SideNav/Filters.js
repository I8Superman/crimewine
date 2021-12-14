import './Filters.scss';

export default function Filters() {
    return (
        <div className="c-filters">
            <ul className="c-filters__cat">
                <li className="c-filters__cat__filter">Alle vine</li>
                <li className="c-filters__cat__filter">Nyheder</li>
                <li className="c-filters__cat__filter">Favoritter</li>
            </ul>
            <ul className='c-filters__cat'>
                <li className="c-filters__cat__filter">Hvidvin</li>
                <li className="c-filters__cat__filter">Rødvin</li>
                <li className="c-filters__cat__filter">Rosé</li>
                <li className="c-filters__cat__filter">Dessertvin</li>
                <li className="c-filters__cat__filter">Sekt</li>
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