import axios from 'axios'

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
