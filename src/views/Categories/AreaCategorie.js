import axios from 'axios'
import React, { Component } from 'react'

export default class AreaCategorie extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    async componentDidMount(){
        const  area  = this.props.match.params.area
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a='+area)
        console.log(response);
       

        this.setState({
            data : response.data.meals
        })

   }
    render() {
        
        return (
            <div className="CategorieRecipe">
                 <h1>Recettes </h1>
                {this.state.data.map((e, index) => { 
                    return (
                        <div key={index}>
                            <a href={e.idMeal}><h2>{e.strMeal}</h2></a>
                            <img src={e.strMealThumb} alt={e.strMeal}/>
                        </div>
                    )
                })}
               
                
            </div>
        )
    }
}
