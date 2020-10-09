import { ADD_FLUSH_MESSAGE, DELETE_FLUSH_MESSAGE } from "../constants";
import shortid from "shortid";
import findIndex from "lodash/findIndex";

const flashMessages = (state = [], action = {}) => {
    console.log("reducer is called");
    console.log(action);
    switch(action.type){
        case ADD_FLUSH_MESSAGE:
            // state 不可以被直接改变，三大原则
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        case DELETE_FLUSH_MESSAGE:
            const index = findIndex(state, { id: action.id });
            if (index >= 0){
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]
            }
            return state;
        default:
            return state;
    }
}

export default flashMessages;