import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import RecipeList from '../components/RecipeList';
import AddRecipeMain from '../components/AddRecipeMain';
import MyHeader from '../components/MyHeader'

let AppRouter = () => (
    <BrowserRouter>
        <div className="app">
            <MyHeader/>
            <Switch>
                <Route exact path="/addrecipe" component={AddRecipeMain} />
                <Route exact path="/recipes" component={RecipeList} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;