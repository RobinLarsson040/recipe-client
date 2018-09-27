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
        <div>
            <h1 className="headline">Nytt recept</h1>
            <div className="flex-row content">
                <Recipe />
                <IngrentSearch />
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeMain)
