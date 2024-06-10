import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import {fakeRecipes} from "../fakedata.js";
import '../App.css';


export default function HomePage () {
    const recipes=fakeRecipes; 
    const [searchTerm, setSearchTerm] = useState(''); 
    function filterRecipes(e) {
        setSearchTerm(e.target.value.toLowerCase()); 
    }
    return (
        <div className="home-page">
            <div className='hero'>
                <h1>Get the best cooking ideas</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="enter a dish" onChange={filterRecipes}></input>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <div className="recipes">
                {recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm))
                .map((recipe) => <Link to={`/recipe-details/${recipe.id}`} state={recipe} key={recipe.id}><RecipeCard recipe={recipe}/></Link>) 
                }
                {
                  recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm)).length > 0 ? 
                   '':
                   <div>Sorry, your search did not match any recipe. </div> 
                } 
            </div>
        </div> 
    )
}