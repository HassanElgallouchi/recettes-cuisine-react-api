import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from "react-router";
import './header.css';

class Index extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: [],
            input: '',
            categories: '',
            ingredient: '',
            origine: '',
            filterSearch: 'search',
            select: 's',
            errorSearch: '',
            firstUrlElement: '',
        }

        console.log('propriété', props);
    }

    //?
    getData = async (prefixUrl) => {
        try {
            const response = await axios(`https://themealdb.com/api/json/v1/1/${prefixUrl}`);
            return response;
        } catch (error) {
            console.log("data est vide");
        }
    }

    checkFilter = () => {
        if (this.state.input !== '' || this.state.input !== null) {
            if (this.state.select === 's') {
                if (this.state.input === '') {
                    this.setState({ errorSearch: 'Le nom doit ne pas être vide !' })
                } else {
                    this.setState({ errorSearch: '' })
                    this.setState({ filterSearch: 'search' });
                }
            } else {
                this.setState({ filterSearch: 'filter' });
            }
        } else {
            return 'Empty input';
        }
    }

    handleClick = async () => {

        try {
            await this.checkFilter();
            //retreiving API data's
            const data = await this.getData(`${this.state.filterSearch}.php?${this.state.select}=${this.state.input}`);

            if (data !== null || data !== undefined || this.state.input === '') {
                if (data.data !== '') {

                    if (data.data.meals !== null) {
                        if (this.state.input !== '') {

                            this.setState({
                                // emptyInput: false,
                                data: data.data.meals
                            })
                            console.log(data);
                        } else {
                            console.log("error data data meals null input vide");
                        }
                    }

                } else {
                    console.log('error data data null');
                }
            } else {
                console.log('error data null');
            }
        } catch (error) {
            if (this.state.input === '') {
                console.log("input vide ");
            }
            console.log(error);
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    // changeUrl = async () => {

    //     return this.props.history.replace(await this.state.firstUrlElement +"/"+ await this.state.filterSearch + "/" + await  this.state.select +"/" + await this.state.input)
        
    // }


    changeName = async () => {

        await this.state.select

        if(this.state.select == 's'){

            this.setState({
                firstUrlElement: "Nom"
            })                
        }
        else if(this.state.select == 'c'){

            this.setState({
                firstUrlElement: "Category"
            })                
        }
        else if(this.state.select == 'i'){

            this.setState({
                firstUrlElement: "Ingredient"
            })                
        }
        else if(this.state.select == 'a'){

            this.setState({
                firstUrlElement: "Origine"
            })                
        }
    }
  

    render() { 
        
        return (
            <header>
              
                <div className="searchBox">
                    <input type="text" name="input" onChange={this.handleChange} value={this.state.input} />
                    <select name="select" onChange={this.handleChange}>
                        <option value="s">Nom</option>
                        <option value="c">Catégories</option>
                        <option value="i">Ingrédient</option>
                        <option value="a">Origine</option>
                    </select>

                    
                    <button onClick={this.changeName}>     
                        <a href={this.state.firstUrlElement +"/"+ this.state.filterSearch + "/" + this.state.select +"/" + this.state.input} onClick={this.handleClick}>      
                       Go
                       </a> 
                    </button>

                </div>
              
            </header>
        )
    }
}

export default withRouter(Index);