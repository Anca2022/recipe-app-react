import '../App.css'; 
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';

export default function Navbar () {
    let mealsRef= useRef();
    let cuisinesRef= useRef();

    function handleMouseOverMeals(){
        mealsRef.current.style.display='block';
    }
    function handleMouseOutMeals(){
        mealsRef.current.style.display ='none';
    }
    function handleMouseOverCuisines(){
        cuisinesRef.current.style.display='block';
    }
    function handleMouseOutCuisines(){
        cuisinesRef.current.style.display ='none';
    }

    return(
        <div className="navbar">
            <div className="logo"><Link to="/">Recipes</Link></div>
            <ul className="navigation">
                <li><NavLink to="/" className={({isActive})=>isActive ? 'is-active' : ''}>ALL</NavLink></li>
                <li onMouseOver={handleMouseOverMeals} onMouseOut={handleMouseOutMeals}>
                    <NavLink to="/" className={({isActive})=>isActive ? 'is-active' : ''}>Meals</NavLink>
                    <div className='meals' ref={mealsRef}>
                        <ul>
                            <li><Link to="/meals?meal=breakfast">breakfast</Link></li>
                            <li><Link to="/meals?meal=lunch">lunch</Link></li>
                            <li><Link to="/meals?meal=dinner">dinner</Link></li>
                        </ul>
                    </div>  
                </li>
                <li onMouseOver={handleMouseOverCuisines} onMouseOut={handleMouseOutCuisines}>
                    <NavLink to="/cuisines" className={({isActive})=>isActive ? 'is-active' : ''}>Cuisines</NavLink>
                    <div className='meals' ref={cuisinesRef}>
                        <ul>
                            <li><Link to="/meals?type=indian">indian</Link></li>
                            <li><Link to="/meals?type=mexican">mexican</Link></li>
                            <li><Link to="/meals?type=chinese">chinese</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>


                {/* <li><NavLink to="/" className={({isActive})=>isActive ? 'is-active' : ''}>ALL</NavLink></li>
                <li><NavLink to="/meals" className={({isActive})=>isActive ? 'is-active' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Meals</NavLink></li>
                <li><NavLink to="/cuisines" className={({isActive})=>isActive ? 'is-active' : ''}>Cuisines</NavLink></li>
            </ul> */}
            
            {/* <div className='meals' ref={mealsRef} style={{display: 'none'}}>
                <ul>
                    <li>breakfast</li>
                    <li>lunch</li>
                    <li>dinner</li>
                </ul>
            </div>  */}


        </div>     
    )
}