let defaultFoundIngredientsReducer = [];

let foundIngredientsReducer = (state = defaultFoundIngredientsReducer, action) => {
    switch (action.type) {
      case "SET_FOUND_INGREDIENTS":
        return action.foundIngredients;
        case "EMPTY_FOUND_INGREDIENTS":
        return []
      default:
        return state;
    }
  };


  export default foundIngredientsReducer;




