import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorite from "./views/Favorite/Index";


function App() {
 
  return (
    <Router>
     <Route path="/favorite" component={Favorite}/> 
    </Router>
  );
}

export default App;
