import React, { Component } from 'react'
import { Table } from "antd";
import { connect } from 'react-redux'
import { removeInstruction } from '../actions/temporaryRecipeAction'


const columns = [{
    title: 'Instruktioner: ',
    dataIndex: 'value',
    key: 'value'
}]


export class InstructionsContainer extends Component {

    render() {
        return (
            <div className="section">
                {this.props.temporaryRecipe.instructions.length > 0 ? <Table rowKey={record => record.value}  columns={columns} dataSource={this.props.temporaryRecipe.instructions} size="small"
                    onRow={
                        (record) => {
                            return {
                                onClick: () => {
                                    this.props.removeInstruction(record)
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
    removeInstruction
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsContainer)
