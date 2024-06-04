import '../App.css';


export default function RecipeCard() {
    return (
        <div className="recipe-card">
            <div className="image">
                <img src={require('../assets/dish1.jpg')} alt="White Cheese Chicken Lasagna"></img>
            </div>
            <div className="main-details">
                <h3>White Cheese Chicken Lasagna</h3>
                <p>Italian food</p>
                <p>Rating.... </p>
            </div>
            <div className="extra-details">
                <div>
                    <p>Cooking Time</p>
                    <p>15 minutes</p>
                </div>
                <div></div>
                <div>
                    <p>Difficulty</p>
                    <p>Easy</p>
                </div>
            </div>
        </div>
    )
}