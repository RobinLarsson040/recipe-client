let defaultTemporaryRecipeState = {
    name: '',
    category: '',
    description: '',
    persons: 1,
    instructions: [],
    ingredients: [],
    totalNutritions: {},
    imgUrl: ''
};

let temporaryRecipeReducer = (state = defaultTemporaryRecipeState, action) => {
    switch (action.type) {
      case "ADD_RECIPE":
        return [...state, action.recipe];
      case "REMOVE_RECIPE":
        return state.filter(item => item.id !== action.id);
        case "GET_RECIPES":
        return action.recipes
      default:
        return state;
    }
  };


  export default temporaryRecipeReducer;