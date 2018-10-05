import axios from 'axios'


export let setIngredients = foundIngredients => {
    return {
        type: "SET_FOUND_INGREDIENTS",
        foundIngredients
    };
};

export let clearIngredients = () => {
    return {
        type: "EMPTY_FOUND_INGREDIENTS",
    };
};

export let getIngredientAutoComplete = (text) => {
    return dispatch => {
        axios.get('http://localhost:3000/ingredients/auto/' + encodeURI(text) )
            .then(function (response) {
                dispatch(setIngredients(response.data.result));
            })
            .catch(function (error) {
            })
    };
};

export let getIngredientByName = (name) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/ingredients/' + encodeURI(name) )
            .then(function (response) {
                resolve(response.data.result)
            })
            .catch(function (error) {
                reject(error)
            })
    })
};