import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeList from './RecipeList';
import RecipeSearch from './RecipeSearch'
import { Container, Row, Col } from 'reactstrap';

class Recipe extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container-fluid>
                    <Row>
                        <Col><h1 className="headLine">Recept</h1></Col>
                    </Row>
                    <Row>
                        <Col xs="2"><RecipeSearch/></Col>
                        <Col xs="10"><RecipeList /></Col>
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


export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
