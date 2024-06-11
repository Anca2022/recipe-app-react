import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>     
        <Route path="/recipe-details/:id" element={<RecipeDetails />} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
