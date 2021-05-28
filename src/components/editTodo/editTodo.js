import React from 'react';
import {connect} from 'react-redux';
import {onEditInputChange, finishEditTodo, cancelEdit} from '../../actions';

import editIcon from './edit_end.png';
import editStopIcon from './edit_stop.png';
import './editTodo.scss';

const EditTodo = ({id, cancelEdit, onEditInputChange, finishEditTodo, inputValue}) => {
    return (
        <li className="todoListItem__editedItem">
        <input
            value={inputValue} 
            onChange={onEditInputChange} 
            className="todoListItem__input"
        />
        <button 
                onClick={() => finishEditTodo(id)}
                className="todoListItem__button"
        >
            <img src={editIcon} alt="edit"/>
        </button>
        <button 
                onClick={() => cancelEdit(id)}
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
    cancelEdit

}
export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);