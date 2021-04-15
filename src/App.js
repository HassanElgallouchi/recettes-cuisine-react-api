import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorite from "./views/Favorite/Index";
import recipeCategories from "./components/recipeCategories/Index";


function App() {

  return (

    <Router>
      
      <Route exact path="/" component={recipeCategories} />
      <Route exact path="/favorite" component={Favorite} />

    </Router>
  );
}

export default App;
