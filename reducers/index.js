import { combineReducers } from 'redux';

export const todoReducer = (state = [], { type, payload }) => {
    
    if (type === "ADD_TODO") {
        return state.concat({
            ...payload
        })
    }

    if (type === "CHANGE_TEXT_TODO") {
        return state.map((todo) => {

            if(todo.id === payload.id) {
                return{
                    ...todo,
                    textTodo: payload.changeTextToDo,
                }
            }
        })
    }
    
    return state;
}

export default combineReducers({
    todos: todoReducer,
})