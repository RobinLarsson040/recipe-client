import axios from 'axios'


export let setIngredients = foundIngredients => {
    return {
        type: "SET_INGREDIENTS",
        foundIngredients
    };
};


export let getIngredientAutoComplete = (text) => {
    return dispatch => {
        axios.get('http://localhost:3000/ingredients/auto/' + text)
            .then(function (response) {
                dispatch(setIngredients(response.data.result)); 
            })
            .catch(function (error) {
                console.log(error);
            })
    };
};