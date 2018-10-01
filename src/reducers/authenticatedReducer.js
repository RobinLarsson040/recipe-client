let defaultAuthenticatedReducer = false;

let authenticatedReducer = (state = defaultAuthenticatedReducer, action) => {
    switch (action.type) {
        case "SET_AUTHENTICATION":
            return action.authenticated;
        default:
            return state;
    }
};


export default authenticatedReducer;