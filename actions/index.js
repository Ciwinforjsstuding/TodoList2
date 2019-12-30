export const addTodoAction = (textTodo, id) => ({
    type: "ADD_TODO",
    payload: {
        textTodo,
        isDone: false,
        id
    }
});