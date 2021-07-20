//I_Importation

//a_des modules
import React, { Component } from "react";
import axios from "axios";
//b_du css
import "./RecipeCategories.css";

//II_Creation du component
export default class Index extends Component {
  /*1) initialisation des variables dans un constructeur*/
  constructor(props) {
    super(props);

    this.state = {
      //*a_variable dans lequel on va stocker les datas
      data: [],
      firstData: {},
      secondData: {},
      //*b_variable ou l'on gérer le style
      style: {
        opacity: "0",
      },
    };
  }

  /*2) récupération des données dans l'API via axios*/
  getCategories = async () => {
    try {
      /*a_Récupération de la réponse et stockage dans une variable*/
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      /*b_Récupération des data qui nous intéresse dans la response*/
      const elements = response.data.categories;
      const firstEl = response.data.categories[0];
      const secondEl = response.data.categories[1];

      /*c_Changement du state des variables initialisées 
      dans le state en y stockant les datas que 
      l'on va manipuler dans le render*/
      this.setState({
        data: elements,
        firstData: firstEl,
        secondData: secondEl,
      });
    } catch (error) {
      console.error("error:", error);
    }
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div class="flexCategorie">
        <div className="cat cat1">
          {/*Manuplation des datas pour le rendu/affichage*/}

          {/*Data récupérée à la main via state et qui se mette 
          à jour dynamiquement via setState*/}

          <a href={"/categorie/" + this.state.secondData.strCategory}>
            <h4>Recipes With {this.state.firstData.strCategory}</h4>{" "}
          </a>
          <p>
            Discover our <span>beef</span> recipes
          </p>

          <div>
            <a href={"/categorie/" + this.state.firstData.strCategory}>
              <img
                src={this.state.firstData.strCategoryThumb}
                className="categoriesPictures"
              />
            </a>
          </div>
        </div>

        <div className="cat cat2">
          <a href={"/categorie/" + this.state.secondData.strCategory}>
            <h4>Recipes with {this.state.secondData.strCategory}</h4>{" "}
          </a>
          <p>
            Discover our <span>chicken</span> recipes
          </p>
          <div>
            <a href={"/categorie/" + this.state.secondData.strCategory}>
              <img
                src={this.state.secondData.strCategoryThumb}
                className="categoriesPictures"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
