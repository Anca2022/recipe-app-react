import RecipeCard from "./RecipeCard";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage () {
    const [recipes, setRecipes] = useState();
    const [publishedRecipes, setPublishedRecipes] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('All The Recipes');
    const [searchParams] = useSearchParams();
    
    //getting data from API
    useEffect( ()=>{
        fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=6330665b&app_key=e21de4b721adb6cb82e8b44746d017d3%09&cuisineType=Chinese&cuisineType=Mexican&cuisineType=Indian&mealType=Breakfast&mealType=Lunch&mealType=Dinner&time=1%2B&imageSize=LARGE&random=false")
        .then(response => response.json())
        .then(data => {
          let localRecipes=[]; 
          let i=1; 
          data.hits.forEach(item => {
            let recipe = {
              id: i,
              name: item.recipe.label,
              image:item.recipe.images.LARGE.url,
              type: item.recipe.cuisineType,
              meal:item.recipe.mealType[0],
              // rating: result.spoonacularScore.toFixed(2), 
              // numberOfReviews: result.aggregateLikes, 
              cookingTime: item.recipe.totalTime, 
              numberOfServings: item.recipe.yield, 
              ingredients: item.recipe.ingredients.map(ingred => ingred.text)
              // directions: result.analyzedInstructions[0].steps.map(dir => dir.step)
            }
            i++; 
            localRecipes.push(recipe);
          })
          setRecipes(localRecipes);
          setPublishedRecipes(localRecipes);
        })
        .catch(err=> console.error(err))
      }, [])
    // useEffect(()=>{
    //     let localRecipes = []; 
    //     fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=598856858b914ca7bf3be933a61434e4&cuisine=chinese,indian,mexican&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true&number=20")
    //     .then(response => response.json())
    //     .then(data => {
    //         data.results.forEach(result => {
    //             let recipe = {
    //                 id: result.id, 
    //                 name: result.title , 
    //                 image: result.image, 
    //                 type: result.cuisines.map(type => type.toLowerCase()), 
    //                 meal: result.dishTypes.map(meal=> meal.toLowerCase()),
    //                 rating: result.spoonacularScore.toFixed(2), 
    //                 numberOfReviews: result.aggregateLikes, 
    //                 cookingTime: result.readyInMinutes, 
    //                 healthScore: result.healthScore, 
    //                 numberOfServings: result.servings, 
    //                 ingredients: result.extendedIngredients.map(ingred => ingred.original), 
    //                 directions: result.analyzedInstructions[0].steps.map(dir => dir.step)
    //             }
    //             localRecipes.push(recipe);
    //         })
    //         setRecipes(localRecipes);
    //         setPublishedRecipes(localRecipes);
    //     })
    //     .catch(error => console.error(error))
       
    // }, [])

    //filtering by searchParams
    useEffect (()=>{
        function filterByParams(){
            let meal = searchParams.get('meal'); 
            let type = searchParams.get('type'); 
            if(meal){
                setPublishedRecipes(recipes.filter( recipe => recipe.meal.includes(meal) ));
                setMessage(`${meal} recipes`);
            } else if (type) {
                setPublishedRecipes(recipes.filter( recipe => recipe.type.includes(type)));
                setMessage(`${type} food recipes`);
            }
        }
        searchParams.size > 0 ? 
          filterByParams()  
        : setPublishedRecipes(recipes);  
    }, [recipes,searchParams])
    
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
            <h2>{message}</h2>

            <div className="recipes">
                { publishedRecipes && publishedRecipes.length > 0 ? 
                    <>
                    {publishedRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm))
                        .map((recipe) => <Link to={`/recipe-details/${recipe.id}`} state={recipe} key={recipe.id}><RecipeCard recipe={recipe}/></Link>) 
                    }
                    {
                    publishedRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm)).length > 0 ? 
                    '':
                    <div>Sorry, your search did not match any recipe. </div> 
                    }
                    </>
                    :
                    <div>Something went wrong, please try again later</div>
                }
            </div>
        </div> 
    )
}