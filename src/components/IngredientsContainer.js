import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List,Table } from "antd";
import {removeIngredient} from "../actions/temporaryRecipeAction"

const columns = [{
    title: 'Namn ',
    dataIndex: 'name',
    key: 'name'
  },{
    title: 'Antal ',
    dataIndex: 'units',
    key: 'units'
  },{
    title: 'Enhet ',
    dataIndex: 'measuringUnit',
    key: 'measuringUnit'
  },
  ,{
    title: 'Gram/Enhet ',
    dataIndex: 'unitEquivalentInGrams',
    key: 'unitEquivalentInGrams'
  },]

class IngredientsContainer extends Component {

    constructor(props) {
        super(props)
        this.temporaryRecipe = {}
    }

    render() {
        return (
            <div className="small-margin">
            <h3>Ingredienser:</h3>
                {this.props.temporaryRecipe.ingredients.length > 0 ? <Table rowKey={record => record.name} columns={columns} dataSource={this.props.temporaryRecipe.ingredients} size="small"
                    onRow={
                        (record) => {
                        return {
                            onClick: () => {

                                this.props.removeIngredient(record)
                            },
                        };
                    }}  />: <p>Receptet har hitills inga ingredienser</p>}
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
