import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List,Table } from "antd";

const columns = [{
    title: 'Namn',
    dataIndex: 'name',
  }]

class IngredientsContainer extends Component {

    constructor(props) {
        super(props)
        this.temporaryRecipe = {}
    }

    render() {
        return (
            <div className="section">
                {this.props.temporaryRecipe.length > 0 && <Table columns={columns} dataSource={this.props.temporaryRecipe.ingredients} size="small"
                    onRow={(record) => {
                        return {
                            onClick: () => {
                            
                            },
                        };

                    }} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    temporaryRecipe: state.temporaryRecipe
});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
