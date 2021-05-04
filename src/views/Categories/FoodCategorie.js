import axios from "axios";
import React, { Component } from "react";
import "./FoodCategorie.css";

export default class FoodCategorie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const categorie = this.props.match.params.category;

    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categorie
    );

    console.log("YO!!!", categorie);

    this.setState({
      data: response.data.meals,
    });
    console.log(this.state.data.meals);
  }

  render() {
    return (
      <div>
        <div className="titleCateRcp">
          <h1>Recipes</h1>
        </div>
        <div className="recipeParent">
          {this.state.data.map((e, index) => {
            return (
              <div key={index} className="recip1">
                <a href={"/recette/" + e.idMeal}>
                  <h1>{e.strMeal}</h1>
                </a>

                <div className="recipeCImg">
                  <a href={"/recette/" + e.idMeal}>
                    <img src={e.strMealThumb} className="imgC" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
