import React, { Component } from 'react'
import RecipeForm from './RecipeForm';
import IngredientsContainer from './IngredientsContainer';

export default class Recipe extends Component {
  render() {
    return (
      <div className="flex-row">
        <RecipeForm/>
        <IngredientsContainer/>
      </div>
    )
  }
}

