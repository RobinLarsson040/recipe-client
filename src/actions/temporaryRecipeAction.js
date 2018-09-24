import axios from 'axios'


export let addIngredient = ingredient => {
    return {
        type: "ADD_INGREDIENT",
        ingredient
    };
};

export let removeIngredient = ingredient => {
    return {
        type: "REMOVE_INGREDIENT",
        ingredient
    };
};

export let addInstruction = instruction => {
    return {
        type: "ADD_INSTRUCTION",
        instruction
    };
};

export let addFormValues = formValues => {
    return {
        type: "ADD_FORM_VALUES",
        formValues
    };
};

export let clearTemporaryRecipe = () => {
    return {
        type: "CLEAR_RECIPE"
    };
};
