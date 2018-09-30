import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeDetailInfo from './RecipeDetailInfo'
import RecipeDetailIngredients from './RecipeDetailIngredients'

class RecipeDetailMain extends Component {

    render() {
        return (
            <div>
                <h1 className="headLine">{this.props.clickedRecipe.name}</h1>
                <div className="flex-row content">
                    <RecipeDetailInfo />
                    <RecipeDetailIngredients />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    clickedRecipe: state.clickedRecipe
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailMain)
