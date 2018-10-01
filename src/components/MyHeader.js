import { Layout, Menu, Icon, Button, Modal, Input } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthentication, login } from '../actions/authenticationAction'


let { Header } = Layout;
class MyHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.props.login({ username: this.state.username, password: this.state.password }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    onChangeUsername = (e) => {
        e.preventDefault();
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }



    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu
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
                    <Menu.Item key="3">
                        <Button type={this.props.authenticated ? "danger" : "primary"} onClick={() => {
                            if (this.props.authenticated) {
                                this.props.setAuthentication(false);
                            } else {
                                this.showModal()
                            }
                        }}>
                            <Icon type="login" /> {this.props.authenticated ? "Logga ut" : "Logga in"}
                        </Button>
                    </Menu.Item>
                </Menu>
                <Modal
                    title="Inloggning"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input placeholder={"username"} value={this.state.username} onChange={this.onChangeUsername} />
                    <Input type="password" placeholder={"password"} value={this.state.password} onChange={this.onChangePassword} />
                </Modal>
            </Header>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = {
    setAuthentication,
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)




