let defaultFoundIngredientsReducer = [];

let foundIngredientsReducer = (state = defaultFoundIngredientsReducer, action) => {
    switch (action.type) {
      case "SET_INGREDIENTS":
        return action.ingredients;
      default:
        return state;
    }
  };


  export default foundIngredientsReducer;




