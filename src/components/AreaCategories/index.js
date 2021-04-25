import axios from 'axios'
import React, { Component } from 'react'
import './AreaCategories.css';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: {},
            second: {},
            third: {},
        }
       
    };
    
    getAreasRecipe = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const firstElement = response.data.meals[0];
            const secondElement = response.data.meals[1];
            const thirdElement = response.data.meals[2];

            console.log(firstElement);

            this.setState({
                first: firstElement,
                second: secondElement,
                third: thirdElement,
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getAreasRecipe()
    }

    render() {
        return (
            <div className="AreasRecipe">
                <ul>
                   <li><a href={'/Origine/filter/a/'+ this.state.first.strArea}>{this.state.first.strArea}</a></li> 
                   <li><a href={'/Origine/filter/a/'+ this.state.first.strArea}>{this.state.second.strArea}</a></li>
                   <li><a href={'/Origine/filter/a/'+ this.state.first.strArea}>{this.state.third.strArea}</a></li>
                </ul>
            </div>
        )
    }
}
