import { Link, NavLink } from 'react-router';

export default function Header() {
    return (
        <header>
            <p>Demo Requete et routing</p>
            <ul>
                <li>
                    <NavLink to="/" >Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Les films</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/add">Ajouter un film</NavLink>
                </li>
                <li>
                    <NavLink to="/demo/42">Demo param (42)</NavLink>
                </li>
                <li>
                    <NavLink to="/demo/-5">Demo param (-5)</NavLink>
                </li>
            </ul>
        </header>
    );
}