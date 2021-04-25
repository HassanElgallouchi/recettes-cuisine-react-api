import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
    };
  }

  getFavoris = () => {
    if (localStorage.getItem("favoris")) {
      let favorisArray = JSON.parse(localStorage.getItem("favoris"));
      this.setState({ data: favorisArray });
    }
  };


  componentDidMount() {
    this.getFavoris();
  }


  deleteItem = (id) =>{
      let items = JSON.parse(localStorage.getItem("favoris"));
      let favorisArray =  items.filter(item => {
         return item.idMeal !== id 
      });
     localStorage.setItem('favoris', JSON.stringify(favorisArray))
     this.setState({data: favorisArray})
  }


  render() {
    return (
      <div>
      <Link to='/'>Home</Link>
        {this.state.data.length === 0
          ? (
              <p>pas de favoris pour le moment</p>
          )
          : this.state.data.map((item, index) => {
              return (
                <figure key={index}>
                  <a href={`/recette/` + item.idMeal}><img src={item.strMealThumb} alt={item.strMeal} /></a>
                  <a href={`/recette/` + item.idMeal}>{item.strMeal}</a>
                  <button onClick={()=> this.deleteItem(item.idMeal)}>supprimer</button>
                </figure>
              );
            })}
      </div>
    );
  }
}