import React, { Component } from 'react'
import IngredientsContainer from './IngredientsContainer';
import InstructionsContainer from './InstructionsContainer';

export default class MiscContainer extends Component {
  render() {
    return (
      <div>
        <IngredientsContainer/>
        <InstructionsContainer/>
      </div>
    )
  }
}
