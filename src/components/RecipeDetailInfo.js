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

    render() {
        return (
            <div className="content">
                <img src={this.props.clickedRecipe.imageUrl}></img>
                <h3>Beskrivning:</h3>
                <p>{this.props.clickedRecipe.description}</p>
                <h3>Instruktioner:</h3>
                   {this.renderInstructions()}
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
