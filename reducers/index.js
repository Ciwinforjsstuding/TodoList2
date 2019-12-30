import { combineReducers } from 'redux';

export const todoReducer = (state = [], { type, payload }) => {
    
    if (type === "ADD_TODO") {
        return state.concat({
            ...payload
        })
    }
    
    return state;
}

export default combineReducers({
    todos: todoReducer,
})