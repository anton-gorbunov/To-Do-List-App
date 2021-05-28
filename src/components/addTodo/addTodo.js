import React from 'react';
import {connect} from 'react-redux';
import {addTodoItem, onInputChange} from '../../actions';

import './addTodo.css';

const AddTodo = ({addTodoItem, inputValue, onInputChange}) => {
    return (
        <form 
            className="addTodo__form"
            onSubmit={addTodoItem}
        >
            <input 
                type="text"
                placeholder="Enter new task" 
                className="addTodo__input"
                onChange={onInputChange}
                value={inputValue}
            />
            <button className="addTodo__button">Add</button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
const mapDispatchToProps = {
    addTodoItem,
    onInputChange
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);