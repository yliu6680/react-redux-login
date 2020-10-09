import { ADD_FLUSH_MESSAGE, DELETE_FLUSH_MESSAGE } from "../constants";

export const addFlashMessage = (message) => {
    console.log("addFlashMessage action is called");
    return {
        type: ADD_FLUSH_MESSAGE,
        message
    }
}

export const deleteFlashMessage = (id) => {
    console.log("deleteFlashMessage action is called");
    return {
        type: DELETE_FLUSH_MESSAGE,
        id
    }
}