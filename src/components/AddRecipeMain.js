import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngrentSearch from './IngredientSearch'
import Recipe from './Recipe'

class AddRecipeMain extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex-row">
                <Recipe />
                <IngrentSearch />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeMain)
