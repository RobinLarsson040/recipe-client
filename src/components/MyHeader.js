import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


let { Header } = Layout;
class MyHeader extends Component {

    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu
                    className="myHeader"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <Link to="/recipes">
                            Recept
                         </Link></Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/addrecipe">
                            <Icon type="plus" />Nytt Recept
                         </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)




