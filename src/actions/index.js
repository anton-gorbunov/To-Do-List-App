const todosLoaded = (newTodos) => {
    return {
        type: 'TODOS_LOADED',
        payload: newTodos
    }
}
const todosCheckChange = (id) => {
    return {
        type: 'TODOS_COMPLETED_CHANGE',
        checked:id
    }
}
const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        delete: id
    }
}
const addTodoItem = (todoItem) => {
    return {
        type: 'ADD_TODO',
        added: todoItem
    }
}
const editTodo = (id) => {
    return {
        type: 'EDIT_TODO',
        edited: id
    }
}
const finishEditTodo = (id) => {
    return {
        type: 'FINISH_EDIT',
        edited: id
    }
}
const onEditInputChange = (event) => {
    return {
        type: 'EDIT_INPUT_CHANGE',
        edited: event    
    }
}
const cancelEdit = (id) => {
    return {
        type: 'CANCEL_EDIT',
        canceled :id
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