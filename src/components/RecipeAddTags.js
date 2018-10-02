import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'antd';
import { addTag } from '../actions/temporaryRecipeAction'

const FormItem = Form.Item;

class RecipeAddTags extends Component {

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
        if (this.state.value.length > 2 && this.state.value.length < 21) {
            this.props.addTag({ value: this.state.value })
            this.setState({
                value: ''
            })
        }
    }

    render() {
        return (
            <div className="section">
                <h4>Lägg till taggar</h4>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        <Input
                            placeholder={"Lägg till tagg"}
                            style={{ width: 200 }}
                            label="lägg till tagg" type="text" value={this.state.value} onChange={this.handleChange} />
                    </FormItem>
                    <Button type="primary" htmlType="submit">Lägg till tagg</Button>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    temporaryRecipe: state.temporaryRecipe
})

const mapDispatchToProps = {
    addTag
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeAddTags)
