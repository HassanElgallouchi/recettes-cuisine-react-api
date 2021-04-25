import React, { Component } from 'react';
import axios from 'axios';
import './recipe.css'

export default class index extends Component {
    constructor(props) {
   
        super(props);

        this.state = {
            data: [],
            recipeData: {}, 
         
        }
    };

    //DEBUT CODE ABD

    addFavoris = () => {
        let recipeToFavoris = {
          idMeal: this.state.recipeData.idMeal,
          strMeal: this.state.recipeData.strMeal,
          strMealThumb: this.state.recipeData.strMealThumb,
        };
    
        if (localStorage.getItem("favoris")) {
          let favorisArray = JSON.parse(localStorage.getItem("favoris"));
    
          if (favorisArray.length > 0) {
            favorisArray.forEach((item) => {
              if (item.idMeal !== recipeToFavoris.idMeal) {
                favorisArray.push(recipeToFavoris);
              }
            });
          } else {
            favorisArray.push(recipeToFavoris);
          }
    
          localStorage.setItem("favoris", JSON.stringify(favorisArray));
    
        } else {
          let favorisArray1 = [];
          favorisArray1.push(recipeToFavoris);
    
          localStorage.setItem("favoris", JSON.stringify(favorisArray1));
        }
      };
      
    //FIN CODE ABD

    getRecipeDetails = async () => {

        const idUrl = this.props.match.params.idMeal;

        console.log('iiiii', idUrl);
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ idUrl); 

            const element = response.data.meals;

            console.log('jjkjjjfskjsjj', element[0].strIngredient1);

            this.setState({
                data: element,  
                recipeData: element[0] 
            })


        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this. getRecipeDetails()
    }


    render() {
      
        return (

            
        <div className="CategorieRecipe">

          <div class='detailTitle'>
            <h1>Recettes </h1>
          </div>
    
                <div key={index}>

                <div className='rcpTitle'>
                    <a href={this.state.recipeData.idMeal}>
                            <h2>{this.state.recipeData.strMeal}</h2>
                    </a>
                </div>

                <div className='spaceBetween'>

                    <img src={this.state.recipeData.strMealThumb} alt={this.state.recipeData.strMeal} className='detailsRecpImage'/>  
                    <button onClick={this.addFavoris}>Ajouter dans favoris</button>
             
    
                    <div className='instruction'>
                            <h1>Instructions</h1>
                            <p>{this.state.recipeData.strInstructions}</p>
                    </div>

                </div>

                <div className='flex'>

                    <div className="orderedList">

                        <h3>Ingrédients</h3>

                        <ol> 
                   
                              <li>{this.state.recipeData.strIngredient1}</li>
                              <li>{this.state.recipeData.strIngredient2}</li>

                              <li>{this.state.recipeData.strIngredient3}</li>
                              <li>{this.state.recipeData.strIngredient4}</li>
                              <li>{this.state.recipeData.strIngredient5}</li>
                              <li>{this.state.recipeData.strIngredient6}</li>
                              <li>{this.state.recipeData.strIngredient7}</li>
                              <li>{this.state.recipeData.strIngredient8}</li>
                              <li>{this.state.recipeData.strIngredient9}</li>                 
                              <li>{this.state.recipeData.strIngredient10}</li>
                              <li>{this.state.recipeData.strIngredient11}</li>
                              <li>{this.state.recipeData.strIngredient12}</li>
                              <li>{this.state.recipeData.strIngredient13}</li>
                              <li>{this.state.recipeData.strIngredient14}</li>
                              <li>{this.state.recipeData.strIngredient15}</li>
                              <li>{this.state.recipeData.strIngredient16}</li>
                              <li>{this.state.recipeData.strIngredient17}</li>
                              <li>{this.state.recipeData.strIngredient18}</li>
                              <li>{this.state.recipeData.strIngredient19}</li>
                              <li>{this.state.recipeData.strIngredient20}</li>

                        </ol>    

                    </div>

                    <div className='unorderedList'>

                        <h3>Mesures</h3>

                        <ul>

                              <li>{this.state.recipeData.strMeasure1}</li>
                              <li>{this.state.recipeData.strMeasure2}</li>
                              <li>{this.state.recipeData.strMeasure3}</li>
                              <li>{this.state.recipeData.strMeasure4}</li>
                              <li>{this.state.recipeData.strMeasure5}</li>
                              <li>{this.state.recipeData.strMeasure6}</li>
                              <li>{this.state.recipeData.strMeasure7}</li>
                              <li>{this.state.recipeData.strMeasure8}</li>
                              <li>{this.state.recipeData.strMeasure9}</li>
                              <li>{this.state.recipeData.strMeasure10}</li>
                              <li>{this.state.recipeData.strMeasure11}</li>
                              <li>{this.state.recipeData.strMeasure12}</li>
                              <li>{this.state.recipeData.strMeasure13}</li>
                              <li>{this.state.recipeData.strMeasure14}</li>
                              <li>{this.state.recipeData.strMeasure15}</li>
                              <li>{this.state.recipeData.strMeasure16}</li>
                              <li>{this.state.recipeData.strMeasure17}</li>
                              <li>{this.state.recipeData.strMeasure18}</li>
                              <li>{this.state.recipeData.strMeasure19}</li>
                              <li>{this.state.recipeData.strMeasure20}</li>                    
                     
                        </ul>

                    </div>

                  </div>         
                 
                </div>
     
       </div>
        )
    }
}
