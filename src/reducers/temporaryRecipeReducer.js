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
        name: action.formValues.name,
        category: action.formValues.category,
        description: action.formValues.description,
        persons: action.formValues.persons,
        imgUrl: action.formValues.imgUrl
      };
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
      }
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.name !== action.ingredient.name)
      }
    case "ADD_INSTRUCTION":
      return {
        ...state,
        instructions: [...state.instructions, action.instruction]
      }
      case "REMOVE_INSTRUCTION":
      return {
        ...state,
        instructions: state.instructions.filter(instruction => instruction.value !== action.instruction.value)
      }
      case "CLEAR_RECIPE":
      return defaultTemporaryRecipeState
    default:
      return state;
  }
};


export default temporaryRecipeReducer;