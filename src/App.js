import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorite from "./views/Favorite/index";
import Homepage from "./views/Homepage/";
import AreaCategorie from './views/Categories/AreaCategorie';
import Header from './components/Header/';

function App() {

  return (

    <Router>
      <Header/>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/categories/:area" component={AreaCategorie}/>
      <Route exact path="/favorite" component={Favorite} />
    </Router>
  );
}

export default App;
