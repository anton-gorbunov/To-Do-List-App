import React from 'react';
import {connect} from 'react-redux';
import {todosCheckChange, deleteTodo, editTodo} from '../../actions';
import EditTodo from '../editTodo';

import dustbin from './dustbin.png';
import editIcon from './edit.png';
import './todoListItem.scss';


const TodoListItem = ({items, todosCheckChange, deleteTodo, editTodo}) => {
    const {id, title,completed,edit} = items;
    const indicator = completed ? <span>&#10004;</span> : <span>&#10006;</span>
    let classList = 'todoListItem__indicator';
    if (edit) {
        return (
          <EditTodo id={id}/>
        )
    }
    if (!completed) {
        classList += ' not_completed';
    } else {
        classList += ' completed'
    }
    return (
        <li className="todoListItem__item">
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => todosCheckChange(id)}
            />
            <div className={classList}>{indicator}</div>
            <span className="todoListItem__title">{title}</span>
            <button 
                    onClick={() => editTodo(id)}
                    className="todoListItem__button"
            >
                <img src={editIcon} alt="edit"/>
            </button>
            <button 
                    onClick={() => deleteTodo(id)}
                    className="todoListItem__button"
            >
                <img src={dustbin} alt="dustbin"/>
            </button>
        </li>
    );
};

const mapDispatchToProps = {
    todosCheckChange, 
    deleteTodo,
    editTodo
}

export default connect(null, mapDispatchToProps)(TodoListItem);