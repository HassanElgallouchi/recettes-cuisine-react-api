import "./App.css";
import Favorite from "./views/Favorite/index";
import Homepage from "./views/Homepage/";
import AreaCategorie from "./views/Categories/AreaCategorie";
import RealHeader from "./components/RealHeader/index";
import Footer from "./components/Footer/index";
import FoodCategorie from "./views/Categories/FoodCategorie";
import RecipeByName from "./views/Categories/RecipeByName";
import RecipeByCategorie from "./views/Categories/RecipeByCategorie";
import RecipeDetails from "./views/Recipe/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <RealHeader />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/categories/:area" component={AreaCategorie} />
        <Route exact path="/categorie/:category" component={FoodCategorie} />
        <Route exact path="/recette/:idMeal" component={RecipeDetails} />

        <Route
          exact
          path="/Nom/:filterSearch/:select/:input"
          component={RecipeByName}
        />

        <Route
          exact
          path="/Category/:filterSearch/:select/:input"
          component={RecipeByCategorie}
        />
        <Route
          exact
          path="/Ingredient/:filterSearch/:select/:input"
          component={RecipeByCategorie}
        />
        <Route
          exact
          path="/Origine/:filterSearch/:select/:input"
          component={RecipeByCategorie}
        />
        <Route exact path="/favorite" component={Favorite} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
