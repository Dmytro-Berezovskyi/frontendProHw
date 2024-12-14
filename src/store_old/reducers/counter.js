import {
    INCREMENT_COUNT,
    DECREMENT_COUNT, RESET_COUNT,
} from "../actions/actionTypes";

const initialState = {
    count: 0,
    items: [],
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, count: state.count + 1}
        case DECREMENT_COUNT:
            return {...state, count: state.count - 1}
        case RESET_COUNT:
            return {...state, count: state.count = 0}
        default:
            return state;
    }
}