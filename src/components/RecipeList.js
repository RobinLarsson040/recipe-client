import { List, Avatar, Icon } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGetRecipes } from '../actions/recipesAction'

const listData = [];

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class RecipeList extends Component {

    componentDidMount() {
        this.props.startGetRecipes();
    }


    render() {
        return (
            <div style={{width: 600}}>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 4
                }}
                dataSource={this.props.recipes}
                footer={<div><b>ant design</b> footer part</div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="Show nutrition" />, <IconText type="star-o" text={item.persons} />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.imageUrl}/>}
                            title={<a href={item.href}>{item.name}</a>}
                        />
                        <p>{item.description}</p>
                        <p>{item.instructions}</p>
                    </List.Item>
                )}
                />
                </div>
        )
    }
}
const mapStateToProps = (state,props) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = {
    startGetRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)




