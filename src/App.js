import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import FilteredResults from './components/FilteredResults';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>     
        <Route path="/meals" element={<FilteredResults />}></Route>     
        <Route path="/cuisines" element={<FilteredResults />}></Route>     
        <Route path="/recipe-details/:id" element={<RecipeDetails />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
