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
        <Form className="section" onSubmit={this.handleSubmit}>
          <FormItem >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Receptet måste ha ett namn' }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Recipe name" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('category', {
              rules: [{ required: true, message: 'Ange kategori' }],
            })(
              <Select style={{ width: 150 }} placeholder="Select category">
                <Option value="dinner">Dinner</Option>
                <Option value="dessert">Dessert</Option>
              </Select>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Ange recept beskrivning' }],
            })(
              <TextArea onChange={this.onDescriptionChange}
                style={{ width: 300 }}
                placeholder="Description of the recipe" autosize={{ minRows: 4, maxRows: 6 }} />
            )}
          </FormItem>
          {<FormItem>
            {getFieldDecorator('persons', {
              rules: [{ required: true, message: 'Ange för hur många personer detta receptet är gjort för' }],
            })(
              <InputNumber style={{ width: 120 }} placeholder="antal personer" min={1} max={10} />
            )}
          </FormItem>}
          <FormItem>
            {getFieldDecorator('imageUrl', {
              rules: [{ required: false }],
            })(
              <Input style={{ width: 300 }} prefix={<Icon type="image" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Image URL" />
            )}
          </FormItem>
          <FormItem>
          <Button type="primary" htmlType="submit">Skapa recept</Button>
          </FormItem>
        </Form>
        <IngredientsContainer/>
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
