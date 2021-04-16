import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorite from "./views/Favorite/index";
import Homepage from "./views/Homepage/index";
import Header from './components/Header/index';
import Footer from './components/Footer/index';


function App() {

  return (

    <Router>
      <Header/>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/favorite" component={Favorite} />
      <Footer/>

    </Router>
  );
}

export default App;
