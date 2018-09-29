export let setCategory = category => {
    return {
        type: "SET_CATEGORY",
        category
    };
};

export let setName = name => {
    return {
        type: "SET_NAME",
        name
    };
};