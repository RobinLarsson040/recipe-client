import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm';
import IngredientSearch from './IngredientSearch';
import RecipeAddInstructions from './RecipeAddInstructions';
import IngredientsContainer from './IngredientsContainer';
import InstructionsContainer from './InstructionsContainer';
import {Container, Row, Col} from 'reactstrap';


class AddRecipeMain extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container-fluid>
                    <Row>
                        <Col><h1 className = "headLine">Nytt recept</h1></Col>
                    </Row>
                    <Row>
                        <Col><RecipeForm /></Col>
                        <Col><IngredientSearch /></Col>
                        <Col><IngredientsContainer /></Col>
                    </Row>
                    <Row>
                        <Col><RecipeAddInstructions/></Col>
                        <Col><InstructionsContainer/></Col>
                    </Row>
                </Container-fluid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeMain)
