import Navbar from "./Navbar";
import RecipeCard from "./RecipeCard";
import '../App.css';


export default function HomePage () {
    return (
        <div className="home-page">
            <Navbar />
            <div className='hero'>
                <h1>Get the best cooking ideas</h1>
            </div>
            <RecipeCard />
        </div>
        
    )
}