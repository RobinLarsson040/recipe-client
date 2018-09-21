import { List, Avatar, Icon } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'

const listData = [];

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class RecipeList extends Component {
    render() {
        return(
            <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="Show nutrition" />, <IconText type="star-o" text={item.persons} />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.imageUrl} />}
                        title={<a href={item.href}>{item.name}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)




