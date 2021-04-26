import axios from 'axios'
import React, { Component } from 'react'
import './randomRecipe.css';


export default class Index extends Component {
   
    constructor(props) {
   
        super(props);

        this.state = {
            data: [],
            urlRecipe : 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
        }
    };
    // urlRecipe => stock url api => after we are going to concact with recipe's ID at the end 
    getRandomRecipe = async () => {

        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php'); //<= this URL generate a random recipe

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

                    <div className='randomRecipe flex'>

                        
                        <div className='flex'>
                            <img src={e.strMealThumb} alt={e.strMeal} />
                        </div>
                        <div className= 'leftContent'>
                        
                        <div className='instructionDetail flex collumn'>
                            <h1 key={e.strMeal}>{e.strMeal}</h1>
                            <p className='glassBox'>{e.strInstructions}</p>
                            <a href={'/recette/' + e.idMeal}>Detail</a>
                        </div>
                        
                        </div>
                    </div>
                )
            })}
        </div>
        )
    }
}
