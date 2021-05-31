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
const addTodoItem = (todoItem) => {
    return {
        type: 'ADD_TODO',
        payload: todoItem
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
const onEditInputChange = (event) => {
    return {
        type: 'EDIT_INPUT_CHANGE',
        payload: event    
    }
}
const cancelEdit = (id) => {
    return {
        type: 'CANCEL_EDIT',
        payload:id
    }
}
const todoError = () => {
    return {
        type: 'TODO_ERROR'
    }
}
export {
    todosLoaded,
    todosCheckChange,
    deleteTodo,
    addTodoItem,
    editTodo,
    finishEditTodo,
    onEditInputChange,
    cancelEdit,
    todoError
}