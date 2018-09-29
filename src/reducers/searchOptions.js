let defaultSearchOptions = [];

let searchOptionsReducer = (state = defaultSearchOptions, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {name: action.name};
        case "SET_CATEGORY":
            return {category: action.category};
        default:
            return state;
    }
};


export default searchOptionsReducer;