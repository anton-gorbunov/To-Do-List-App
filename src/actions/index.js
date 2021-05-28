const todosLoaded = (newTodos) => {
    return {
        type: 'TODOS_LOADED',
        payload: newTodos
    }
}
const todosCheckChange = (id) => {
    return {
        type: 'TODOS_COMPLETED_CHANGE',
        payload:id
    }
}
const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}
const onInputChange = (e) => {
    return {
        type: 'INPUT_CHANGE',
        payload: e
    }
}
const addTodoItem = (e) => {
    return {
        type: 'ADD_TODO',
        payload: e
    }
}
const editTodo = (id) => {
    return {
        type: 'EDIT_TODO',
        payload: id
    }
}
const finishEditTodo = (id) => {
    return {
        type: 'FINISH_EDIT',
        payload: id
    }
}
const onEditInputChange = (e) => {
    return {
        type: 'EDIT_INPUT_CHANGE',
        payload: e
    }
}
const stopEdit = (id) => {
    return {
        type: 'STOP_EDIT',
        payload:id
    }
}
export {
    todosLoaded,
    todosCheckChange,
    deleteTodo,
    onInputChange,
    addTodoItem,
    editTodo,
    finishEditTodo,
    onEditInputChange,
    stopEdit
}