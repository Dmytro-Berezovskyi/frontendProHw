import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from "./actionTypes";

export const incrementCount = () => ({
    type: INCREMENT_COUNT,
})

export const decrementCount = () => ({
    type: DECREMENT_COUNT,
})

export const resetCount = () => ({
    type: RESET_COUNT,
})