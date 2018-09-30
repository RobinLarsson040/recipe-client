let defaultClickedRecipeReducer = {};

let clickedRecipeReducer = (state = defaultClickedRecipeReducer, action) => {
    switch (action.type) {
        case "SET_CLICKED_RECIPE":
            return action.recipe;
        case "RESET_CLICKED_RECIPE":
            return defaultClickedRecipeReducer;
        default:
            return state;
    }
};


export default clickedRecipeReducer;