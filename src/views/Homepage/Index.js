import React, { Component } from 'react'
import Header from '../../components/Header/'
import RandomRecipe from '../../components/RandomRecipe/index.js'
import RecipeCategories from '../../components/RecipeCategories'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RandomRecipe/>
                <RecipeCategories/>
            </div>
        )
    }
}
