import React, { Component } from 'react'
import { Table } from "antd";
import { connect } from 'react-redux'
import { removeTag } from '../actions/temporaryRecipeAction'


const columns = [{
    title: 'taggar: ',
    dataIndex: 'value',
    key: 'value',
    fixed: true
}]


export class TagsContainer extends Component {

    render() {
        return (
            <div className="section">
                {this.props.temporaryRecipe.tags.length > 0 ? <Table className="bold" rowKey={record => record.value}  columns={columns} dataSource={this.props.temporaryRecipe.tags} size="small"
                    onRow={
                        (record) => {
                            return {
                                onClick: () => {
                                    this.props.removeTag(record)
                                },
                            };
                        }} />
                    : <h3></h3>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    temporaryRecipe: state.temporaryRecipe
})

const mapDispatchToProps = {
    removeTag
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer)
