import React, { Component } from 'react';
import axios from 'axios'; 



export default class RecipeByCategorie extends Component {
    constructor(props){
        super(props)//?
        this.state = {
            data: []
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
            console.log('yayyy', response);
    }
    
    render() {

        const search = this.props.match.params.filterSearch;
        const select  = this.props.match.params.select;
        const input = this.props.match.params.input;

        return (
            <div>

              
            { this.state.data === null ? "Data doesn't exist": ( 
            this.state.data.map((element, index) => {

                  return (
                      
                    <div key={index}>

                     <h1>{element.strMeal}</h1>
                     <img src={element.strMealThumb}/>

                     <button> 
                        <a href={'/recette/'+ element.idMeal}>
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
