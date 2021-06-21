import TodoService from '../services/todoService';
import uuid from 'react-uuid';
const todoService = new TodoService();
const initialState = {
    todos: [],
    loading: true,
    error: false,
    editInputValue: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODOS_LOADED' :
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case 'TODOS_COMPLETED_CHANGE' : 
            const todosId = action.checked;
            const index = state.todos.findIndex(item => item.id === todosId);
            const oldTodo = state.todos[index];
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, index),
                    {...oldTodo, completed: !oldTodo.completed},
                    ...state.todos.slice(index+1)
                ]
            }
        case 'DELETE_TODO' : 
            const deletedTodosId = action.delete;
            const deletedIndex = state.todos.findIndex(item => item.id === deletedTodosId);
            todoService.deleteTodoItem(deletedTodosId)
            .then(res=>console.log(res));
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, deletedIndex),
                    ...state.todos.slice(deletedIndex+1)
                ]
            }
        case 'ADD_TODO' :
            const newItem = {
                id: uuid(),
                title: action.added,
                completed: false,
                edit:false
            }
            if (action.added !== '') {
                todoService.postTodos(newItem)
                .then(res => {
                    console.log(res)
                });
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        newItem
                    ]
                }
            }
        case 'EDIT_INPUT_CHANGE' : 
        return {
            ...state,
            editInputValue: action.edited.target.value
        }
        case 'EDIT_TODO' :
            const editedId = action.edited;
            const editedIndex = state.todos.findIndex(item => item.id === editedId);
            const oldItem = state.todos[editedIndex];
            return {
                ...state,
                editInputValue: oldItem.title,
                todos: [
                    ...state.todos.slice(0, editedIndex),
                    {...oldItem, edit: true},
                    ...state.todos.slice(editedIndex + 1)
                ]
            }
        case 'FINISH_EDIT' :
            const finishId = action.edited;
            const finishIndex = state.todos.findIndex(item => item.id === finishId);
            const finishTodo = state.todos[finishIndex];
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, finishIndex),
                    {...finishTodo, title: state.editInputValue, edit: false},
                    ...state.todos.slice(finishIndex+1)
                ]
            }
        case 'CANCEL_EDIT' :
            const stopId = action.canceled;
            const stopIndex = state.todos.findIndex(item => item.id === stopId);
            const stopTodo = state.todos[stopIndex];
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, stopIndex),
                    {...stopTodo, title: stopTodo.title, edit: false},
                    ...state.todos.slice(stopIndex+1)
                ]
            }
        case 'TODO_ERROR' :
            return {
                ...state,
                loading: false,
                error: true
            }
        default :
            return state
    }
};

export default reducer;