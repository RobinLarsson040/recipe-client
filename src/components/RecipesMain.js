import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch'

class Recipe extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1 className="headline">Recept</h1>
                <div className="content">
                    <RecipeSearch />
                    <RecipeList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
