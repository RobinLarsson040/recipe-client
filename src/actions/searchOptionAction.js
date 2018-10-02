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

export let setDescription = description => {
    return {
        type: "SET_DESCRIPTION",
        description
    };
};

export let setTag = tag => {
    return {
        type: "SET_TAG",
        tag
    };
};