import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Select, Button, InputNumber, Icon } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { getIngredientAutoComplete } from '../actions/foundIngredientsAction'
import IngredientsContainer from './IngredientsContainer';

const FormItem = Form.Item;
const Option = Select.Option;

class RecipeForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h2>Recept information</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Namn" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Receptet måste ha ett namn' }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            )}
          </FormItem>
          <FormItem label="Kategori" >
            {getFieldDecorator('category', {
              rules: [{ required: true, message: 'Ange kategori' }],
            })(
              <Select style={{ width: 150 }}>
                <Option value="dinner">Dinner</Option>
                <Option value="dessert">Dessert</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="Beskrivning" >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Ange recept beskrivning' }],
            })(
              <TextArea onChange={this.onDescriptionChange}
                style={{ width: 300 }}
                autosize={{ minRows: 4, maxRows: 6 }} />
            )}
          </FormItem>
          {<FormItem label="Antal personer" >
            {getFieldDecorator('persons', {
              rules: [{ required: true, message: 'Ange för hur många personer detta receptet är gjort för' }],
            })(
              <InputNumber style={{ width: 120 }} min={1} max={10} />
            )}
          </FormItem>}
          <FormItem label="url till bild" >
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  getIngredientAutoComplete
}

const WrappedRecipeForm = Form.create({})(RecipeForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRecipeForm)
