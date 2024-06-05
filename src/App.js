import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>     
        <Route path="/cuisines" element={<RecipeCard/>}></Route>     
        <Route path="/about" element={<RecipeCard/>}></Route>     
      </Routes>
    </div>
  );
}

export default App;
