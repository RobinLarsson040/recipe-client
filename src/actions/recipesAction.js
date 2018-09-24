import axios from 'axios'
import { clearTemporaryRecipe } from './temporaryRecipeAction';

export let getRecipes = recipes => {
    return {
        type: "GET_RECIPES",
        recipes
    };
};

export let startGetRecipes = () => {
    return dispatch => {
        axios.get('http://localhost:3000/recipes')
            .then(function (response) {
                dispatch(getRecipes(response.data.result)); 
            })
            .catch(function (error) {
                console.log(error);
            })
    };
};

export let saveRecipe = (recipe) => {
    console.log('recipe data from save recipe method', recipe)
    return dispatch => {
        axios.post('http://localhost:3000/recipes', recipe)
            .then(function (response) {
                clearTemporaryRecipe();
                startGetRecipes();
            })
            .catch(function (error) {
                console.log(error);
            })
    };
}
