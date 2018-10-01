import React, { Component } from 'react'
import IngredientsContainer from './IngredientsContainer';

export default class RecipeContainers extends Component {
  render() {
    return (
      <div>
        <IngredientsContainer/>
        <InstructionsContainer/>
      </div>
    )
  }
}
