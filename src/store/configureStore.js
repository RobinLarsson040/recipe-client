import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import recipeReducer from '../reducers/recipeReducer'
import foundIngredientsReducer from '../reducers/foundIngredientsReducer'
import temporaryRecipeReducer from '../reducers/temporaryRecipeReducer'
import searchOptions from '../reducers/searchOptions'

export default () => {
  let store = createStore(
    combineReducers({
      recipes: recipeReducer,
      foundIngredients: foundIngredientsReducer,
      temporaryRecipe: temporaryRecipeReducer,
      searchOptions: searchOptions
    }),
    applyMiddleware(thunk)
  );

  return store;
};