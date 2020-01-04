export const addTodoAction = (textTodo, id) => ({
    type: "ADD_TODO",
    payload: {
        textTodo,
        isDone: false,
        id
    }
});

export const changeTextToDoAction = (changeTextToDo, id) => ({
    type: "CHANGE_TEXT_TODO",
    payload: {
        changeTextToDo,
        id,
    }
})