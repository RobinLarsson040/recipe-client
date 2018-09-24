import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm'
import IngredientsContainer from './IngredientsContainer';

class Recipe extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex-row section">
                <RecipeForm />
                <IngredientsContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
