export let setClickedRecipe = recipe => {
    return {
        type: "SET_CLICKED_RECIPE",
        recipe
    };
};

export let resetClickedRecipe = () => {
    return {
        type: "RESET_CLICKED_RECIPE",
    };
};