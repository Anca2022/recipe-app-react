import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>     
        <Route path="/cuisines" element={<RecipeCard/>}></Route>     
        <Route path="/about" element={<RecipeCard/>}></Route>   
        <Route path="/recipe-details/:id" element={<RecipeDetails />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
