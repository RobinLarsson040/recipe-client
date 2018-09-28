
import "./App.css";
import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import {startGetRecipes} from './actions/recipesAction'

let store = configureStore();

startGetRecipes();

store.subscribe(()=>{
  console.log(store.getState())
})

let jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default jsx;

