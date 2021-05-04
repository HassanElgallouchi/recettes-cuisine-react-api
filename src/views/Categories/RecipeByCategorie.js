import React, { Component } from "react";
import axios from "axios";

export default class RecipeByCategorie extends Component {
  constructor(props) {
    super(props); //?
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const search = this.props.match.params.filterSearch;
    const select = this.props.match.params.select;
    const input = this.props.match.params.input;

    const response = await axios.get(
      `https://themealdb.com/api/json/v1/1/${search}.php?${select}=${input}`
    );

    this.setState({
      data: response.data.meals,
    });
    console.log("yayyy", response);
  }

  render() {
    const search = this.props.match.params.filterSearch;
    const select = this.props.match.params.select;
    const input = this.props.match.params.input;

    return (
      <div>
        <div className="titleCateRcp">
          <h1>Recipes</h1>
        </div>
        <div className="recipeParent">
          {this.state.data === null
            ? "Data doesn't exist"
            : this.state.data.map((element, index) => {
                return (
                  <div key={index} className="recip1">
                    <a href={"/recette/" + element.idMeal}>
                      <h1>{element.strMeal}</h1>
                    </a>

                    <div className="recipeCImg">
                      <a href={"/recette/" + element.idMeal}>
                        <img src={element.strMealThumb} />
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
