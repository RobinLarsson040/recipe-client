import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm'
import IngrentSearch from './IngredientSearch'

class AddRecipeMain extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="addRecipeMain">
                <RecipeForm />
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
