import { Card, List, Icon, Avatar } from "antd";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGetRecipes } from '../actions/recipesAction'

const { Meta } = Card;


class RecipeList extends Component {

    componentDidMount() {
        this.props.startGetRecipes();
    }
    render() {
        return (
            <div className="section">
                <List
                    grid={{ gutter: 20, column: 3 }}
                    dataSource={this.props.recipes}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                style={{ width: 300 }}
                                actions={[<Icon type="setting" />, <Icon type="edit" />]}
                            >
                                <p>{item.name}</p>
                                <p>{item.category}</p>
                        
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = {
    startGetRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)




