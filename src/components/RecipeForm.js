import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Select, Button, InputNumber, Icon, Alert, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { getIngredientAutoComplete } from '../actions/foundIngredientsAction'
import { addFormValues } from '../actions/temporaryRecipeAction'
import { saveRecipe } from '../actions/recipesAction'

const FormItem = Form.Item;
const Option = Select.Option;

class RecipeForm extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      ingredientsError: false,
      saveResult: "",
      visible: false
    }
  }

  onClose = (e) => {
    this.setState({
      ingredientsError: false
    })
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.temporaryRecipe.ingredients.length > 0) {

          let temporaryRecipe = this.props.temporaryRecipe;
          let recipe = {
            ...values,
            ingredients: temporaryRecipe.ingredients,
            instructions: temporaryRecipe.instructions
          }
          this.props.saveRecipe(recipe).then((result) => {
            this.setState({
              saveResult: result
            })
            this.props.form.resetFields();
          }).catch((error) => {
            this.setState({
              saveResult: error
            })
          })
          this.setState({
            visible: true
          })

        } else {
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
      <div className="section">
        <h4>Information</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormItem style={{ paddingBottom: 1, margin: 1 }} label="Namn" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Receptet måste ha ett namn' }],
            })(
              <Input style={{ width: 300 }} />
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }} label="Kategori" >
            {getFieldDecorator('category', {
              rules: [{ required: true, message: 'Ange kategori' }],
            })(
              <Select style={{ width: 150 }}>
                <Option value="dinner">Middag</Option>
                <Option value="dessert">Dessert</Option>
                <Option value="snacks">Snacks</Option>
              </Select>
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }} label="Beskrivning" >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Ange recept beskrivning' }],
            })(
              <TextArea onChange={this.onDescriptionChange}
                style={{ width: 300 }}
                autosize={{ minRows: 3, maxRows: 5 }} />
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
        },
                <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h3>{this.state.saveResult}</h3>
        </Modal>

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
