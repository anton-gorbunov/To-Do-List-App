import React from 'react';
import {connect} from 'react-redux';
import {todosCheckChange, deleteTodo, editTodo} from '../../actions';
import EditTodo from '../editTodo';

import dustbin from './dustbin.png';
import editIcon from './edit.png';
import './todoListItem.css';


const TodoListItem = ({items, todosCheckChange, deleteTodo, editTodo}) => {
    const {id, title,completed,edit} = items;
    let classList = 'todoListItem__indicator';
    if (edit) {
        return (
          <EditTodo items={items}/>
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
            <div className={classList}>{completed ? <span>&#10004;</span> : <span>&#10006;</span>}</div>
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

const mapStateToProps = (state) => {
    return {
      
    }
}
const mapDispatchToProps = {
    todosCheckChange, 
    deleteTodo,
    editTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);