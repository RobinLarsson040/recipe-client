import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import RecipeDetailMain from '../components/RecipeDetailMain'

import AddRecipeMain from '../components/AddRecipeMain';
import MyHeader from '../components/MyHeader'
import RecipeMain from '../components/RecipesMain'

let AppRouter = () => (
    <BrowserRouter>
        <div className="app">
            <MyHeader/>
            <Switch>
                <Route exact path="/addrecipe" component={AddRecipeMain} />
                <Route exact path="/recipes" component={RecipeMain} />
                <Route exact path="/recipeDetail" component={RecipeDetailMain} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;