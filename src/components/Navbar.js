import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';

export default function Navbar () {
    let mealsDivRef= useRef();
    let cuisinesDivRef= useRef();
    const [searchParams] = useSearchParams();
    const {pathname} = useLocation();

    const isActive = {
        color: '#EF6351'    
    }

    function handleMouseOverMeals(){
        mealsDivRef.current.style.display='block';
    }
    function handleMouseOutMeals(){
        mealsDivRef.current.style.display ='none';
    }
    function handleMouseOverCuisines(){
        cuisinesDivRef.current.style.display='block';
    }
    function handleMouseOutCuisines(){
        cuisinesDivRef.current.style.display ='none';
    }

    return(
        <div className="navbar">
            <div className="logo"><Link to="/">Recipes</Link></div>
            <ul className="navigation">
                <li ><Link to='/' style={searchParams.size <1 && pathname === '/' ? isActive : {} }> 
                    ALL</Link></li>
                <li onMouseOver={handleMouseOverMeals} onMouseOut={handleMouseOutMeals}>
                    <Link to='/'  style={searchParams.size > 0 && searchParams.get('meal')  ? isActive : {} }>
                    Meals</Link>
                    <div className='meals' ref={mealsDivRef}>
                        <ul>
                            {/* <li><Link to="/?meal=starter">Starter</Link></li> */}
                            <li><Link to="/?meal=snack">Breakfast</Link></li>
                            <li><Link to="/?meal=lunch">Lunch</Link></li>
                            <li><Link to="/?meal=dinner">Dinner</Link></li>
                        </ul>
                    </div>  
                </li>
                <li onMouseOver={handleMouseOverCuisines} onMouseOut={handleMouseOutCuisines}>
                    <Link to='/'  style={searchParams.size > 0 && searchParams.get('type')  ? isActive : {} } >
                    Cuisines</Link>
                    <div className='meals' ref={cuisinesDivRef}>
                        <ul>
                            <li><Link to="/?type=indian">Indian</Link></li>
                            <li><Link to="/?type=mexican">Mexican</Link></li>
                            <li><Link to="/?type=chinese">Chinese</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>     
    )
}