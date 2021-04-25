import axios from 'axios';
import React, { Component } from 'react';



export default class RecipeByName extends Component {

    constructor(props){
        super(props)//?
        this.state = {
            data: [],

        }

    }  
    async componentDidMount() {
            const search = this.props.match.params.filterSearch;
            const select  = this.props.match.params.select;
            const input = this.props.match.params.input;
            
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/${search}.php?${select}=${input}`)

            this.setState({
                data: response.data.meals
            })       
    }
    
    render() {
        return (
            <div>
             
                { this.state.data === null ? "Data doesn't exist": ( 
                this.state.data.map((e, index) => {
                  return (
                    <div key={index}>

                     <h3>{e.strMeal}</h3>
                     <img src={e.strMealThumb}/>
                    <button> 
                        <a href={'/recette/' + e.idMeal}>
                        Recipe details
                        </a> 
                    </button>

                    </div>
                  )
              }))}
            </div>
        )
    }
}
