let defaultSearchOptions = [];

let searchOptionsReducer = (state = defaultSearchOptions, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {... state, name: action.name};
        case "SET_CATEGORY":
            return {...state ,category: action.category};
            case "SET_DESCRIPTION":
            return {...state ,description: action.description};
            case "SET_TAG":
            return {...state ,tag: action.tag};
        default:
            return state;
    }
};

export default searchOptionsReducer;