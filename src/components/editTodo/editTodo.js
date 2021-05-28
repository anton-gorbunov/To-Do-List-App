import React from 'react';
import {connect} from 'react-redux';
import {onEditInputChange, finishEditTodo, stopEdit} from '../../actions';

import editIcon from './edit_end.png';
import editStopIcon from './edit_stop.png';

import './editTodo.css';

const EditTodo = ({items,stopEdit, onEditInputChange, finishEditTodo, inputValue}) => {
    const {id} = items
    return (
        <li className="todoListItem__editedItem">
        <input value={inputValue} onChange={onEditInputChange} className="todoListItem__input"/>
        <button 
                onClick={() => finishEditTodo(id)}
                className="todoListItem__button"
        >
            <img src={editIcon} alt="edit"/>
        </button>
        <button 
                onClick={() => stopEdit(id)}
                className="todoListItem__button"
        >
            <img src={editStopIcon} alt="dustbin"/>
        </button>
    </li>
    );
};
const mapStateToProps = (state) => {
    return {
        inputValue: state.editInputValue
    }
}
const mapDispatchToProps = {
    finishEditTodo,
    onEditInputChange,
    stopEdit

}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);