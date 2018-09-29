let getVisisbleRecipes = (recipes, category, name) => {
    return recipes
        .filter(item => {
            let recipeNameMatch = name
                ? item.name.includes(name)
                : true;
            let categoryMatch = category ? item.category.includes(category) : true;

            if(category === "all"){
                categoryMatch = true;
            }

            return recipeNameMatch && categoryMatch;
        })
};

export default getVisisbleRecipes;