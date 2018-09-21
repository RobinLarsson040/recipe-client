import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AddRecipe from '../components/AddRecipe';
import Recipes from '../components/Recipes';
import RecipeList from '../components/RecipeList';

let AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/addrecipe" component={AddRecipe} />
                <Route exact path="/recipes" component={RecipeList} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;