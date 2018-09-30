import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'antd';
import TextArea from "antd/lib/input/TextArea";
import { addInstruction } from '../actions/temporaryRecipeAction'

const FormItem = Form.Item;

class RecipeAddInstructions extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value.length > 5) {
            this.props.addInstruction({ value: this.state.value })
            this.setState({
                value: ''
            })
        }
    }

    render() {
        return (
            <div className="section">
                <h4>Lägg till instruktioner</h4>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        <TextArea
                            placeholder={"Lägg till instruktion"}
                            style={{ width: 300 }}
                            autosize={{ minRows: 3, maxRows: 5 }} label="lägg till instruktion" type="text" value={this.state.value} onChange={this.handleChange} />
                    </FormItem>
                    <Button type="primary" htmlType="submit">Lägg till instruktion</Button>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    temporaryRecipe: state.temporaryRecipe
})

const mapDispatchToProps = {
    addInstruction
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeAddInstructions)
