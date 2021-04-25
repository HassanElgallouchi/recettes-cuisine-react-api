import axios from 'axios'
import React, { Component } from 'react'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    getData = async (id) => {
        const response = await axios.get('https://themealdb.com/api/json/v1/1/lookup.php?i=' + id);
console.log(response);
        this.setState({ data: response.data.meals[0] })
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getData(id)
    }
    render() {
        // let strIngredient = 
        let recette = this.state.data;
        console.log(recette);

        return (
            <section>
                <div className="container">



                                {/* <div className="recette">
                                    <h2>{recette.strMeal}</h2>
                                    <div className="ingrredients">
                                        <ul>
                                            {
                                                
                                            }
                                            <li>{recette.strIngredient1}</li>
                                            <li>{recette.strIngredient2}</li>
                                        </ul>
                                        <div className="image">
                                            <img src={recette.strMealThumb} />
                                        </div>
                                    </div>
                                    <button>Ajouter aux favoris</button>
                                    <p>
                                        {recette.strInstructions}
                                    </p>
                                </div> */}



                </div>
            </section>
        )
    }
}
