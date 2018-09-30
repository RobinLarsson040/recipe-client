import React, { Component } from 'react';
import IngredientSearch from './IngredientSearch';
import  RecipeAddInstructions  from './RecipeAddInstructions';

export default class RecipeMisc extends Component {
    render() {
        return (
            <div>
                <IngredientSearch />
                <RecipeAddInstructions />
            </div>
        )
        
    }
}
