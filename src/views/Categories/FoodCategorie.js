import axios from 'axios';
import React, { Component } from 'react';

export default class FoodCategorie extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount (){
        const categorie = this.props.match.params.category;

        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categorie)

        console.log('YO!!!',categorie);

        this.setState({
            data: response.data.meals
        })
        console.log(this.state.data.meals);
    }
    
    render() {
        return (
            <div>
                
              <h1>Recipes</h1>

              {this.state.data.map((e, index) => {
                  return (
                    <div key={index}>

                      <a href={'/recette/' + e.idMeal}><h1>{e.strMeal}</h1></a>
                      <a href={'/recette/' + e.idMeal}><img src={e.strMealThumb}/></a>

                    <button> 
                        <a href={'/recette/' + e.idMeal}>
                            Recipe details
                        </a> 
                    </button>

                    </div>
                  )
              })}


                
            </div>
        )
    }
}
