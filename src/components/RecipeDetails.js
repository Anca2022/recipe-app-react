import { useLocation } from "react-router-dom";
export default function RecipeDetails(props){
    let {state} = useLocation();
    return (
        <div>
            <h1 style={{marginTop:'5rem'}}>Recipe details works</h1>
            <p>And here is the data: {state.name}</p>
        </div>
        
    )
}