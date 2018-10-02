import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class RecipeDetailInfo extends Component {


    renderInstructions = () => {
        return this.props.clickedRecipe.instructions.map((instruction) => {
            return (
                <p key={instruction.value}>
                   - {instruction.value}
                </p>
            )
        })
    }

    renderTags = () => {
        return this.props.clickedRecipe.tags.map((tag) => {
            return (
                <p className="bold" key={tag.value}>
                   #{tag.value}
                </p>
            )
        })
    }

    render() {
        return (
            <div className="content">
                <img className="imgDetail" src={this.props.clickedRecipe.imageUrl}></img>
                <h3>Beskrivning:</h3>
                <p>{this.props.clickedRecipe.description}</p>
                <h3>Instruktioner:</h3>
                   {this.renderInstructions()}
                   <h3>Taggar:</h3>
                   {this.renderTags()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    clickedRecipe: state.clickedRecipe
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailInfo)
