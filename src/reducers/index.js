import TodoService from '../services/todoService';
const todoService = new TodoService();
const initialState = {
    todos: [],
    loading: true,
    inputValue: '',
    editInputValue: '',
    id: 200,
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
            const todosId = action.payload;
            const index = state.todos.findIndex(item => item.id === todosId);
            const oldTodo = state.todos[index];
            const newTodo = {...oldTodo, completed: !oldTodo.completed};
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, index),
                    newTodo,
                    ...state.todos.slice(index+1)
                ]
            }
        case 'DELETE_TODO' : 
            const deletedTodosId = action.payload;
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
        case 'INPUT_CHANGE' : 
            return {
                ...state,
                inputValue: action.payload.target.value
            }
        case 'ADD_TODO' :
            action.payload.preventDefault();
            const newItem = {
                id: ++state.id,
                title: state.inputValue,
                completed: false
            }
            if (state.inputValue !== '') {
                todoService.postTodos(newItem)
                .then(res => {
                    console.log(res)
                });
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        newItem
                    ],
                    inputValue: ''
                }
            }
        case 'EDIT_INPUT_CHANGE' : 
        return {
            ...state,
            editInputValue: action.payload.target.value
        }
        case 'EDIT_TODO' :
            const editedId = action.payload;
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
            const finishId = action.payload;
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
        case 'STOP_EDIT' :
            const stopId = action.payload;
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
        default :
            return state
    }
};

export default reducer;