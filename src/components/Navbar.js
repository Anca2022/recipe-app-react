import '../App.css'; 
import { Link, NavLink } from 'react-router-dom';

export default function Navbar () {
    return(
        <div className="navbar">
            <div className="logo"><Link to="/">Recipes</Link></div>
            <ul className="navigation">
                <li><NavLink to="/" className={({isActive})=>isActive ? 'is-active' : ''}>ALL</NavLink></li>
                <li><NavLink to="/meals" className={({isActive})=>isActive ? 'is-active' : ''}>Meals</NavLink></li>
                <li><NavLink to="/cuisines" className={({isActive})=>isActive ? 'is-active' : ''}>Cuisines</NavLink></li>
            </ul>

           
        </div>     
    )
}