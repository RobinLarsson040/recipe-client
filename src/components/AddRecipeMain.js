import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm';
import IngredientSearch from './IngredientSearch';
import RecipeAddInstructions from './RecipeAddInstructions';
import IngredientsContainer from './IngredientsContainer';
import InstructionsContainer from './InstructionsContainer';
import TagsContainer from './TagsContainer';
import RecipeAddTags from './RecipeAddTags';
import { Container, Row, Col } from 'reactstrap';


class AddRecipeMain extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><h1 className="headLine">Nytt recept</h1></Col>
                    </Row>
                    <Row>
                        <Col sm="4"><RecipeForm /></Col>
                        <Col sm="3"><IngredientSearch /></Col>
                        <Col sm="5"><IngredientsContainer /></Col>
                    </Row>
                    <Row>
                        <Col><RecipeAddInstructions /></Col>
                        <Col><InstructionsContainer /></Col>
                    </Row>
                    <Row>
                        <Col><RecipeAddTags /></Col>
                        <Col><TagsContainer /></Col>
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
