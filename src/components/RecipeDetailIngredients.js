import React, { Component } from 'react'
import { Card, Select } from "antd";
import { connect } from 'react-redux'
import { calculateTotalNutritions } from '../utils/nutritionCalculator'


const Option = Select.Option;
class RecipeDetailIngredients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: this.props.clickedRecipe.persons
        }
    }


    totalNutritions = () => {
        let nutritions = calculateTotalNutritions(this.props.clickedRecipe.ingredients)
        return Object.keys(nutritions).map((nutrition) => {
            return (
                <p key={nutrition}>
                    {nutrition} :  {parseFloat((nutritions[nutrition] / this.props.clickedRecipe.persons) * this.state.persons).toFixed(2)} gram
                </p>
            )
        })
    }

    totalIngredients = () => {
        console.log(this.props.clickedRecipe.ingredients)
        return this.props.clickedRecipe.ingredients.map((ingredient) => {
            return (
                <p key={ingredient.name}>
                    {(ingredient.units / this.props.clickedRecipe.persons) * this.state.persons} {ingredient.measuringUnit} {ingredient.name}
                </p>
            )
        })
    }

    render() {
        return (
            <div className="content">
                <p>Antal personer:</p>
                <Select onChange={(value) => {
                    this.setState({
                        persons: value
                    })
                }}
                    value={this.state.persons}
                    style={{ width: 150 }}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                </Select>
                <Card
                    className="bold"
                    title="Totalt näringsvärden"
                    style={{ width: 300 }}
                >
                    {this.totalNutritions()}
                </Card>
                <Card
                    className="bold"
                    title="Totalt antal ingredienser"
                    style={{ width: 300 }}
                >
                    {this.totalIngredients()}
                </Card>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    clickedRecipe: state.clickedRecipe
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailIngredients)
