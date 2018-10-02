import React, { Component } from 'react'
import { connect } from 'react-redux'
import { default as ReactSelect } from 'react-select';
import { Form, Input, Select, Button, InputNumber, Icon, Alert, Modal } from "antd";
import { setCategory, setName, setDescription, setTag } from '../actions/searchOptionAction'
import FormItem from 'antd/lib/form/FormItem';


const Option = Select.Option;

class RecipeSearch extends Component {

    render() {
        return (
            <div className="section">
            <h3>Filtrering</h3>
                <Form>
                    <FormItem >
                        <Input onChange={(e) => {
                            e.preventDefault();
                            this.props.setName(e.target.value)
                        }} style={{ width: 200 }} prefix={<Icon type="search" />}
                            placeholder={"Sök efter receptnamn"} />
                    </FormItem>
                    <FormItem>
                        <Select onChange={(value) => {
                            this.props.setCategory(value)
                        }} placeholder={"Välj kategori"} style={{ width: 150 }}>
                            <Option value="all">Alla</Option>
                            <Option value="dinner">Middag</Option>
                            <Option value="dessert">Efterrätt</Option>
                            <Option value="snacks">Mellanmål</Option>
                        </Select>
                    </FormItem>
                    <FormItem >
                        <Input onChange={(e) => {
                            e.preventDefault();
                            this.props.setDescription(e.target.value)
                        }} style={{ width: 200 }} prefix={<Icon type="search" />}
                            placeholder={"Sök efter beskrivning"} />
                    </FormItem>
                    <FormItem >
                        <Input onChange={(e) => {
                            e.preventDefault();
                            this.props.setTag(e.target.value)
                        }} style={{ width: 200 }} prefix={<Icon type="search" />}
                            placeholder={"Sök efter tagg"} />
                    </FormItem>
                </Form>

            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

const mapDispatchToProps = {
    setCategory,
    setName,
    setDescription,
    setTag
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch)
