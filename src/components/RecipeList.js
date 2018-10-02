import { Card, List, Icon, Avatar } from "antd";
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGetRecipes } from '../actions/recipesAction'
import getVisisbleRecipes from '../selectors/recipeSelector'
import { setClickedRecipe } from '../actions/clickedRecipeAction'
import { withRouter } from 'react-router-dom'

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
    }

    renderTags = (tags) => {
        return tags.map((tag) => {
            return (
                <p className="bold" key={tag.value}>
                    #{tag.value}
                </p>
            )
        })
    }


    render() {
        return (
            <div className="section">
                <List
                    grid={{ gutter: 20, column: 3 }}
                    dataSource={getVisisbleRecipes(this.props.recipes, this.props.searchOptions.category, this.props.searchOptions.name,
                        this.props.searchOptions.description, this.props.searchOptions.tag)}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                cover={<img className="img" alt="example" src={item.imageUrl} />}
                                style={{ width: 300 }}
                                actions={[<Icon type="info-circle" onClick={() => {
                                    this.props.setClickedRecipe(item);
                                    this.props.history.push("/recipeDetail");
                                }} />]}
                                description={item.description}

                            >
                                <Meta
                                    avatar={<Avatar src={this.setAvatar(item.category)} />}
                                    title={item.name}
                                />
                                <p>{item.description}</p>
                                <div className="flex-row">{this.renderTags(item.tags)}</div>

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
    startGetRecipes,
    setClickedRecipe
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeList));




