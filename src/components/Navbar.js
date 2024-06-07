import '../App.css'; 
import { Link, NavLink } from 'react-router-dom';

export default function Navbar () {
    return(
        <div className="navbar">
            <div className="logo"><Link to="/">Recipes</Link></div>
            <ul className="navigation">
                <li><NavLink to="/" className={({isActive})=>isActive ? 'is-active' : ''}>Meals</NavLink></li>
                <li><NavLink to="/cuisines" className={({isActive})=>isActive ? 'is-active' : ''}>Cuisines</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>isActive ? 'is-active' : ''}>About</NavLink></li>
            </ul>
        </div>     
    )
}