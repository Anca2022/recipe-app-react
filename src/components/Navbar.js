import '../App.css'; 
import { Link } from 'react-router-dom';

export default function Navbar () {
    return(
        <div className="navbar">
            <div className="logo">Recipes</div>
            <ul className="navigation">
                <li><Link to="/">Meals</Link></li>
                <li><Link to="/cuisines">Cuisines</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>     
    )
}