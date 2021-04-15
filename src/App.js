import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorite from "./views/Favorite/index";
import Homepage from "./views/Homepage/";


function App() {

  return (

    <Router>
      
      <Route exact path="/" component={Homepage} />
      <Route exact path="/favorite" component={Favorite} />

    </Router>
  );
}

export default App;
