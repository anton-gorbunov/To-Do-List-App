import React from 'react';
import TodoServiceContext from '../todoServiceContext';

const WithTodoService = () => (Wrapped) => {
    return (props) => {
        return (
            <TodoServiceContext.Consumer>
                {
                    (todoService) => {
                        return <Wrapped {...props} todoService={todoService}/>
                    }
                }
            </TodoServiceContext.Consumer>
        )
    }
}

export default WithTodoService;
