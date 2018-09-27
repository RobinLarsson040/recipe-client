import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Form, Button, InputNumber, Alert } from "antd";
import { Select, Icon } from "antd";
import { getIngredientAutoComplete, clearIngredients, getIngredientByName } from '../actions/foundIngredientsAction'
import { addIngredient } from '../actions/temporaryRecipeAction'
import { default as ReactSelect } from 'react-select';

const FormItem = Form.Item;
const Option = Select.Option;
const columns = [{
  title: 'Namn',
  dataIndex: 'Namn',
}]

class IngredientSearch extends Component {

  constructor(props) {
    super(props)
    this.ingredientClicked = false;
    this.state = {
      clickedIngredient: {},
      searchText: '',
      ingredientsNameError: false,
      selectedOption: null
    }
  }

  onClose = (e) => {
    this.setState({
      ingredientsNameError: false
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.saveIngredientToTemporaryRecipe(values);
      }
    });
  }

  onInputChange = (text) => {
    this.setState({
      searchText: text
    })
    if (text.length > 1) {
      this.props.getIngredientAutoComplete(text)
    } else {
      this.props.clearIngredients()
    }
  }
  onChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption.value });
  }
  saveIngredientToTemporaryRecipe = (values) => {
    if (this.state.selectedOption) {
      getIngredientByName(this.state.selectedOption).then((result) => {
        let clickedIngredient = result[0];
        let per100g = {
          "Protein": 0,
          "Kolhydrater": 0,
          "Fett": 0,
          "Energi (kcal)": 0,
          "Salt": 0,
          "Socker totalt": 0
        }
        clickedIngredient.Naringsvarden.Naringsvarde.forEach((item) => {
          if (item.Namn in per100g) {
            per100g[item.Namn] = item.Varde;
          }
        })
        let ingredient = {
          ...values,
          name: clickedIngredient.Namn,
          per100g: per100g
        }
        this.props.addIngredient(ingredient);
        this.setState({
          selectedOption: null
        })
        this.props.form.resetFields();
      }).catch((error) => {
        console.log(error)
      })
    } else {
      this.setState({
        ingredientsNameError: true
      })
    }
  }

  render() {
    const { selectedOption } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="section recipe-search">
        <Form onSubmit={this.handleSubmit}>
          <ReactSelect
            placeholder={"Sök ingrediens"}
            value={selectedOption}
            onChange={this.onChange}
            onInputChange={this.onInputChange}
            options={this.props.foundIngredients.map((item) => {
              return {
                value: item.Namn,
                label: item.Namn
              }
            })}
          />
          {this.state.selectedOption ? <h3>{this.state.selectedOption}</h3> : <p></p>}
          {this.state.ingredientsNameError === true ?
            <Alert
              message="Du måste söka efter en ingrediens först!"
              type="warning"
              closable
              onClose={this.onClose}
            />
            : <p></p>
          }
          <FormItem style={{ padding: 1, margin: 1 }} label="Antal" >
            {getFieldDecorator('units', {
              rules: [{ required: true, message: 'Ange antal, exempel 4' }],
            })(
              <InputNumber min={1} style={{ width: 50 }} prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }} label="Enhet">
            {getFieldDecorator('measuringUnit', {
              rules: [{ required: true, message: 'Ange måttenhet, exempel st/liter/gram' }],
            })(
              <Select style={{ width: 150 }}>
                <Option value="st">st</Option>
                <Option value="liter">liter</Option>
                <Option value="dl">dl</Option>
                <Option value="cl">cl</Option>
                <Option value="ml">ml</Option>
              </Select>
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }} label="Gram/enhet">
            {getFieldDecorator('unitEquivalentInGrams', {
              rules: [{ required: true, message: 'Ange hur många gram varje enhet väger' }],
            })(
              <InputNumber min={1} style={{ width: 80 }} />
            )}
          </FormItem>
          <FormItem style={{ padding: 1, margin: 1 }}>
            <Button type="primary" htmlType="submit">Lägg till ingrediens</Button>
          </FormItem>
        </Form>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  foundIngredients: state.foundIngredients
});


const mapDispatchToProps = {
  getIngredientAutoComplete,
  clearIngredients,
  addIngredient
}

const WrappedIngredientSearchFOrm = Form.create({})(IngredientSearch);


export default connect(mapStateToProps, mapDispatchToProps)(WrappedIngredientSearchFOrm)
