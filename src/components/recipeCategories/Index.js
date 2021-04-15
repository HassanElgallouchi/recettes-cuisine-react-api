//I_Importation

//a_of module
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


//b_of component
import axios from 'axios';


//II_Creation of the object: index
export default class Index extends Component {

    //a_Object element
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            redirect: '/test', 
            style: {
                color:'red',
                display: 'flex',

            }
        }

        console.log(this.props);
        
    }
    //b_Object properties/fonctionalities

    /*retreiving data from a food Api*/
    getCategories = async () => {

        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

            const element = response.data.categories;

            this.setState({
                data: element,
            })

        } catch (error) {

            console.error('error:', error);
        }
    };
    //calling data retreival()
    componentDidMount() {//(?)
        this.getCategories()
    }
    
    render() {
        return (
            <div>
               
                <ul>
                    {this.state.data.map(e =>
                        <div style={this.state.style}>

                            <h4>{e.strCategory}</h4>
                            <a href={'/category/'+ e.strCategory}><img src={e.strCategoryThumb} style={this.state.style} /></a>

                        </div>
                    )}

                </ul>
            </div>
        )
    }
}
