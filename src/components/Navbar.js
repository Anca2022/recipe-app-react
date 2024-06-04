import '../App.css'; 

export default function Navbar () {
    return(
        <div className="navbar">
            <div className="logo">Recipes</div>
            <ul className="navigation">
                <li>Meals</li>
                <li>Cuisines</li>
                <li>About</li>
            </ul>
        </div>  
        
    )
}