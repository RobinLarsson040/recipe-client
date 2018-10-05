import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Table } from "antd";
import { removeIngredient } from "../actions/temporaryRecipeAction"
import { calculateTotalNutritions } from "../utils/nutritionCalculator"

const columns = [{
    title: 'Namn ',
    dataIndex: 'name',
    key: 'name'
}, {
    title: 'Antal ',
    dataIndex: 'units',
    key: 'units'
}, {
    title: 'Enhet ',
    dataIndex: 'measuringUnit',
    key: 'measuringUnit'
},
    , {
    title: 'Gram/Enhet ',
    dataIndex: 'unitEquivalentInGrams',
    key: 'unitEquivalentInGrams'
},]

class IngredientsContainer extends Component {

    constructor(props) {
        super(props)
    }

    totalNutritions = () => {
        let nutritions = calculateTotalNutritions(this.props.temporaryRecipe.ingredients)

        return Object.keys(nutritions).map((nutrition) => {
            return (
                <p key={nutrition}>
                      {nutrition} :  {parseFloat(nutritions[nutrition]).toFixed(2).replace('.', ',') } g
                </p>
            )
        })

    }
    render() {
        return (
            <div className="section">
                {this.props.temporaryRecipe.ingredients.length > 0 ? <Table className="bold" rowKey={record => record.name} columns={columns} dataSource={this.props.temporaryRecipe.ingredients} size="small"
                    onRow={
                        (record) => {
                            return {
                                onClick: () => {
                                    this.props.removeIngredient(record)
                                },
                            };
                        }} />
                    : <p></p>
                }
                {this.props.temporaryRecipe.ingredients.length > 0 ?
                        <Card
                        className="bold standard-width"
                        title="Totalt näringsvärden"
                    >
                        {this.totalNutritions()}
                    </Card>
              : <p></p> }
        

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    temporaryRecipe: state.temporaryRecipe
});


const mapDispatchToProps = {
    removeIngredient
}


export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
