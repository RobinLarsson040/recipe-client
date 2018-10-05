import axios from 'axios'

export let setAuthentication = authenticated => {
    return {
        type: "SET_AUTHENTICATION",
        authenticated
    };
};


export let login = (user) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3000/login', user)
                .then(function (response) {
                    if (response.data === "success") {
                        dispatch(setAuthentication(true));
                        resolve("success")
                    } else {
                        dispatch(setAuthentication(false));
                        reject("error")
                    }
                })
                .catch(function (error) {
                })
        })
    }
}