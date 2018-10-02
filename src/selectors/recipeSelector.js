let getVisisbleRecipes = (recipes, category, name, description, tag) => {
    let inputTag = tag;
    return recipes
        .filter(item => {
            let recipeNameMatch = name
                ? item.name.toUpperCase().includes(name.toUpperCase())
                : true;

            let recipeDescriptionMatch = description
                ? item.description.toUpperCase().includes(description.toUpperCase())
                : true;

            let recipeTagMatchList = item.tags.filter((tag) => {
                return tag.value === inputTag
            })
            let recipeTagMatch = true;
            if (inputTag) {
                recipeTagMatchList.length > 0 ? recipeNameMatch = true : recipeTagMatch = false;
            }
            let categoryMatch = category ? item.category.includes(category) : true;

            if (category === "all") {
                categoryMatch = true;
            }
            return recipeNameMatch && categoryMatch && recipeTagMatch && recipeDescriptionMatch;
        })
};

export default getVisisbleRecipes;