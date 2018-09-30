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
                <Container>
                    <Row>
                        <Col><h1 className = "headLine">Nytt recept</h1></Col>
                    </Row>
                    <Row>
                        <Col><RecipeForm /></Col>
                        <Col><IngredientSearch /></Col>
                        <Col><RecipeAddInstructions /></Col>
                    </Row>
                    <Row>
                        <Col><IngredientsContainer/></Col>
                        <Col><InstructionsContainer/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeMain)
