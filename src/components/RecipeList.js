import { Card, List, Icon, Avatar } from "antd";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGetRecipes } from '../actions/recipesAction'
import getVisisbleRecipes from '../selectors/recipeSelector'

const { Meta } = Card;


class RecipeList extends Component {

    setAvatar(category) {
        switch (category) {
            case 'dinner':
                return 'https://cdn1.iconfinder.com/data/icons/love-wedding-valentine-collection/90/131-512.png'
            case 'dessert':
                return 'https://www.shareicon.net/data/128x128/2016/01/18/705300_food_512x512.png'
            case 'snacks':
                return 'https://img.lovepik.com/element/40054/0055.png_1200.png'
            default:
        }
    }

    componentDidMount() {
        this.props.startGetRecipes();
        console.log(this.props.searchOptions)
    }

    render() {
        return (
            <div className="section">
                <List
                    grid={{ gutter: 20, column: 3 }}
                    dataSource={getVisisbleRecipes(this.props.recipes, this.props.searchOptions.category, this.props.searchOptions.name)}
                    renderItem={item => (
                        <List.Item onClick={this.onClick}>

                            <Card
                                style={{ width: 300, height: 300 }}
                                cover={<img className="img" alt="example" src={item.imageUrl} />}
                                actions={[<Icon type="info-circle"  /> ]}
                                description={item.description}
                            >

                                <Meta
                                    avatar={<Avatar src={this.setAvatar(item.category)} />}
                                    title={item.name}

                                />
                                <p>{item.description}</p>
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
        recipes: state.recipes,
        searchOptions: state.searchOptions
    }
}

const mapDispatchToProps = {
    startGetRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)




