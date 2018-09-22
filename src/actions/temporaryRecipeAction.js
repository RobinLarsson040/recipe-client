import axios from 'axios'


export let addIngredient = ingredient => {
    return {
        type: "ADD_INGREDIENT",
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
