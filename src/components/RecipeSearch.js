import React, { Component } from 'react'
import { connect } from 'react-redux'
import { default as ReactSelect } from 'react-select';
import { Form, Input, Select, Button, InputNumber, Icon, Alert, Modal } from "antd";
import { setCategory, setName } from '../actions/searchOptionAction'


const Option = Select.Option;

class RecipeSearch extends Component {

    render() {
        return (
            <div className="section flex-row">
                <Input onChange={(e) => {
                    e.preventDefault();
                    this.props.setName(e.target.value)
                }} style={{ width: 300 }} prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={"Sök efter receptnamn"} />

                <Select onChange={(value) => {
                    this.props.setCategory(value)
                }} placeholder={"Välj kategori"} style={{ width: 150 }}>
                    <Option value="all">Alla</Option>
                    <Option value="dinner">Middag</Option>
                    <Option value="dessert">Dessert</Option>
                    <Option value="snacks">Snacks</Option>
                </Select>


            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

const mapDispatchToProps = {
    setCategory,
    setName
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch)
