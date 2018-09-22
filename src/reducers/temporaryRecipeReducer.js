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
    case "ADD_FORM_VALUES":
      return {
        ...state,
        name: action.name,
        category: action.category,
        description: action.description,
        persons: action.persons,
        imgUrl: action.imgUrl
      };
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
      }
/*     case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
      } */
    case "ADD_INSTRUCTION":
      return {
        ...state,
        instructions: [...state.instructions, action.instruction]
      }
/*     case "REMOVE_INSTRUCTION":
      return {
        ...state,
        instructions: [...state.instructions, action.instruction]
      } */
    default:
      return state;
  }
};


export default temporaryRecipeReducer;