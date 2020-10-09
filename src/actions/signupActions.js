import axios from "axios";

export const userSignupRequest = (userData) => {
    //thunk
    return dispatch => {
        return axios.post("/api/users", userData);
    }
}

// https://stackoverflow.com/questions/63620337/file-download-using-axios-getting-typeerror-cannot-use-in-operator-to-search
// axiod.get method only has one parameter, it's version problem with axios
export const isUserExists = (username) =>{
    console.log(`/api/users/${username}`);
    return dispatch =>{
        return axios.get(`/api/users/${username}`);
    }
}