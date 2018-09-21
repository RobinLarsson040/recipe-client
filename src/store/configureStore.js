import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reciperReducer from '../reducers/recipeReducer'

export default () => {
  let store = createStore(
    combineReducers({
      recipes: reciperReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};