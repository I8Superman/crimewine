import './Sidenav.css';

import { Link } from 'react-router-dom';

export default function SideNav() {
    return (
        <div className="c-sidenav">
            MENU:
            <nav>
                <Link to="/">Home</Link>
                <Link to="/nyheder">Nyheder</Link>
                <Link to="/vine">Vine</Link>
                <Link to="/om">Om</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/kig-forbi">Kig forbi</Link>
            </nav>
        </div>
    );
}