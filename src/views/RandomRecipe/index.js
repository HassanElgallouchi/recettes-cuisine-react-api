import React, { Component } from 'react'
import './RandomRecipe.css'
import axios from 'axios';

export default class RandomRecipe extends Component {
   
    constructor() {
   
        super();

        this.state = {
            data: [],
            urlRecipe : 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
        }
    };

    getRandomRecipe = async () => {

        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

            const element = response.data.meals;

            console.log(element);

            this.setState({
                data: element,
            })

        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getRandomRecipe()

    }


    render() {
        return (
            <div>
                {this.state.data.map(e => {
                    return (
                    <div>
                        <h1 key={e.strMeal}>{e.strMeal}</h1>
                        <img src={e.strMealThumb} alt={e.strMeal}/>
                        <p>{e.strInstructions}</p>
                        <a href={'/recette/'+e.idMeal}>Detail</a> 
                    </div>
                    )
                })} 
            </div>
        )
    }
}
