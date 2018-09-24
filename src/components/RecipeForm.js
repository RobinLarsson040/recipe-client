import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Select, Button, InputNumber, Icon, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { getIngredientAutoComplete } from '../actions/foundIngredientsAction'
import {addFormValues} from '../actions/temporaryRecipeAction'
import {saveRecipe} from '../actions/recipesAction'

const FormItem = Form.Item;
const Option = Select.Option;

class RecipeForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ingredientsError: false
    }
  }

  onClose = (e) => {
    this.setState({
      ingredientsError: false
    })
  };

 handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(this.props.temporaryRecipe.ingredients.length > 0){
          let temporaryRecipe = this.props.temporaryRecipe;
          let recipe = {
            ...values,
            ingredients: temporaryRecipe.ingredients
          }
            this.props.saveRecipe(recipe);
        }else{
          this.setState({
            ingredientsError: true
          })
        }
       
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h2>Recept information</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormItem style={{ padding: 1, margin: 1 }} label="Namn" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Receptet måste ha ett namn' }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }} label="Kategori" >
            {getFieldDecorator('category', {
              rules: [{ required: true, message: 'Ange kategori' }],
            })(
              <Select style={{ width: 150 }}>
                <Option value="dinner">Dinner</Option>
                <Option value="dessert">Dessert</Option>
              </Select>
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }} label="Beskrivning" >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Ange recept beskrivning' }],
            })(
              <TextArea onChange={this.onDescriptionChange}
                style={{ width: 300 }}
                autosize={{ minRows: 4, maxRows: 6 }} />
            )}
          </FormItem>
          {<FormItem style={{ padding: 1, margin: 1 }} label="Antal personer" >
            {getFieldDecorator('persons', {
              rules: [{ required: true, message: 'Ange för hur många personer detta receptet är gjort för' }],
            })(
              <InputNumber style={{ width: 120 }} min={1} max={10} />
            )}
          </FormItem>}
          <FormItem style={{ padding: 1, margin: 1 }} label="url till bild" >
            {getFieldDecorator('imageUrl', {
              rules: [{ required: false }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="image" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Skapa recept</Button>
          </FormItem>
        </Form>
        {this.state.ingredientsError === true ? 
                <Alert
                message="Ett recept måste ha mins en ingrediens!"
                type="warning"
                closable
                onClose={this.onClose}
              />
            : <p></p>
      }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  temporaryRecipe: state.temporaryRecipe
});

const mapDispatchToProps = {
  getIngredientAutoComplete,
  addFormValues,
  saveRecipe
}

const WrappedRecipeForm = Form.create({})(RecipeForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRecipeForm)
