import axios from 'axios'
import React, { Component } from 'react'
import './AreaCategories.css';

export default class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            urlAreaRecipe : "www.themealdb.com/api/json/v1/1/filter.php?a="
        }
    };
    getAreasRecipe = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
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
        this.getAreasRecipe()
    }

    render() {
        return (
            <div className="AreasRecipe">
                <ul>
                    {this.state.data.map(e =>
                        <li key={e.strArea}><a href={'/recette/'+ e.strArea}>{e.strArea}</a></li>
                    )}</ul>
            </div>
        )
    }
}
