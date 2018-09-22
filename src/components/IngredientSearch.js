import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Input, Select, Button, InputNumber, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Menu, Dropdown, Icon } from "antd";
import { getIngredientAutoComplete } from '../actions/ingredientsAction'

class IngredientSearch extends Component {

  constructor(props){
    super(props)
    this.state = {
      ingredients: []
    }
  }

   onChange = (e)=> {
    e.persist();
    let text = e.target.value;
    if(text.length > 1){
      this.props.getIngredientAutoComplete(text)
    }
  }

  render() {
    return (
      <div>
     <Input onChange={this.onChange} style={{ width: 300 }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Sök på ingrediens" />
     <List
      size="small"
      dataSource={this.props.foundIngredients}
      renderItem={item => (<List.Item>{item.Namn}</List.Item>)}
    />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  foundIngredients: state.foundIngredients
});


const mapDispatchToProps = {
  getIngredientAutoComplete
}


export default connect(mapStateToProps, mapDispatchToProps)(IngredientSearch)
