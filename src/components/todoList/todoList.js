import React, {Component} from 'react';
import TodoListItem from '../todoListItem';
import Spinner from '../spinner';
import {connect} from 'react-redux';
import {todosLoaded} from '../../actions';
import WithTodoService from '../withTodoService';


import './todoList.css';


export class TodoList extends Component {
    
    componentDidMount() {
        this.props.todoService.getTodos()
        .then(res => this.props.todosLoaded(res));
    }
    render() {
    const {todoItems, loading} = this.props;
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
        loading: state.loading
    }
}
const mapDispatchToProps = {
    todosLoaded
}
export default WithTodoService()(connect(mapStateToProps,mapDispatchToProps )(TodoList));