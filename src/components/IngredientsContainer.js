import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Table } from "antd";
import { removeIngredient } from "../actions/temporaryRecipeAction"
import { calculateTotalNutritions } from "../utils/nutritionCalculator"

const columns = [{
    title: 'Namn ',
    dataIndex: 'name',
    key: 'name',
    className: 'column'
}, {
    title: 'Antal ',
    dataIndex: 'units',
    key: 'units',
    className: 'column'
}, {
    title: 'Enhet ',
    dataIndex: 'measuringUnit',
    key: 'measuringUnit',
    className: 'column'
},
    , {
    title: 'Gram/Enhet ',
    dataIndex: 'unitEquivalentInGrams',
    key: 'unitEquivalentInGrams',
    className: 'column'
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
                      {nutrition} :  {parseFloat(nutritions[nutrition]).toFixed(2) } gram
                </p>
            )
        })

    }
    render() {
        return (
            <div className="section">
                {this.props.temporaryRecipe.ingredients.length > 0 ? <Table rowKey={record => record.name} columns={columns} dataSource={this.props.temporaryRecipe.ingredients} size="small"
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
                        title="Totalt näringsvärden"
                        style={{ width: 300 }}
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
