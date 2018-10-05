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
            })
    };
};


export let saveRecipe = (recipe) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3000/recipes', recipe)
                .then(function (response) {
                    if (response.data === "success") {
                        dispatch(clearTemporaryRecipe());
                        dispatch(startGetRecipes());
                        resolve("Receptet sparat!")
                    } else {
                        reject("Namnet på receptet existerar redan!")
                    }
                })
                .catch(function (error) {
                })
        })
    };
}
