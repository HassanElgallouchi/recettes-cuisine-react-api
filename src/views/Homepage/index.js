import React, { Component } from 'react'
import RandomRecipe from '../../components/RandomRecipe/index.js'
import RecipeCategories from '../../components/RecipeCategories'
// import AreaCategories from '../../components/AreaCategories'
import SearchBar from '../../components/SearchBar/index'



export default class Index extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <RandomRecipe/>
                <RecipeCategories/>
                {/* <AreaCategories/> */}
            </div>
        )
    }
}
