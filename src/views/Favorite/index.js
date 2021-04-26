import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './favorite.css';

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


  deleteItem = (id) => {
    let items = JSON.parse(localStorage.getItem("favoris"));
    let favorisArray = items.filter(item => {
      return item.idMeal !== id
    });
    localStorage.setItem('favoris', JSON.stringify(favorisArray))
    this.setState({ data: favorisArray })
  }


  render() {
    return (
      <section>
        <div className="container">
          <div className="favorite">
            {this.state.data.length === 0
              ? (
                <div className="not-favoris">
                  <p>pas d'article dans les favoris pour le moment ;)</p>
                </div>
              )
              : this.state.data.map((item, index) => {
                return (
                  <figure key={index}>
                    <a href={`/recette/` + item.idMeal}><img src={item.strMealThumb} alt={item.strMeal} /></a>
                    <h2><a href={`/recette/` + item.idMeal}>{item.strMeal}</a></h2>
                    <div className="">
                      <button onClick={() => this.deleteItem(item.idMeal)}>retirer de favoris</button>
                    </div>
                  </figure>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}