import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Form, Button, InputNumber, Table } from "antd";
import { Select, Icon } from "antd";
import { getIngredientAutoComplete, clearIngredients } from '../actions/foundIngredientsAction'
import { addIngredient } from '../actions/temporaryRecipeAction'

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
      searchText: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.saveIngredientToTemporaryRecipe(values);
        this.props.form.resetFields();
      }
    });
  }

  onChange = (e) => {
    e.persist();
    let text = e.target.value;
    this.setState({
      searchText: text
    })
    if (text.length > 1) {
      this.props.getIngredientAutoComplete(text)
    } else {
      this.props.clearIngredients()
    }
  }

  saveIngredientToTemporaryRecipe = (values) => {
    let clickedIngredient = this.state.clickedIngredient;
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
      per100g: per100g
    }

    this.props.addIngredient(ingredient);
    this.setState({
      clickedIngredient: {}
    })

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="section">
        <h2>Sök ingrediens</h2>
        <Input value={this.state.searchText} onChange={this.onChange} style={{ width: 200 }} prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Sök på ingrediens" />
        {this.props.foundIngredients.length > 0 && <Table rowKey={record => record.Namn} columns={columns} dataSource={this.props.foundIngredients} size="small"
          onRow={(record) => {
            return {
              onClick: () => {
                this.props.form.setFieldsValue({
                  name: record.Namn
                })
                this.setState({
                  clickedIngredient: record,
                  searchText: ''
                })
                this.props.clearIngredients()
              },
            };
          }} />}
        <Form onSubmit={this.handleSubmit}>
          <FormItem style={{ padding: 1, margin: 1 }} label="Namn" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Sök efter ingrediens i sökfältet' }],
            })(
              <Input style={{ width: 340 }} readOnly placeholder={"Använd sökfältet ovan för att hitta ingrediens"}></Input>
            )}
          </FormItem>
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
