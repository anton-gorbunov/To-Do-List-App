import React, {Component} from 'react';
import TodoListItem from '../todoListItem';
import Spinner from '../spinner';
import Error from '../error';
import {connect} from 'react-redux';
import {todosLoaded, todoError} from '../../actions';
import TodoService from '../../services/todoService';

import './todoList.scss';


export class TodoList extends Component {
    componentDidMount() {
        const todoService = new TodoService();
        todoService.getTodos()
        .then(res => this.props.todosLoaded(res))
        .catch(error => this.props.todoError())
    }
    render() {
    const {todoItems, loading, error} = this.props;
    if (error) {
        return (
            <Error/>
        );
    }
    if (loading) {
        return <Spinner/>
    }
    
    return (
        <ul className="todoList__list">
            {todoItems.map(item => {
                return (
                    <TodoListItem 
                        key={item.id}
                        items={item}        
                    />
                );
            })}
        </ul>
    );
  
    }   
}
const mapStateToProps = (state) => {
    return {
        todoItems: state.todos,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {
    todosLoaded,
    todoError
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);