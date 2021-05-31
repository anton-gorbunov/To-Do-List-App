import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodoItem} from '../../actions';

import './addTodo.scss';

class AddTodo extends Component {
    state ={
        inputValue: ''
    };
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodoItem(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }
    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <form 
                className="addTodo"
                onSubmit={this.onHandleSubmit}
            >
                <input 
                    type="text"
                    placeholder="Enter new task" 
                    className="addTodo__input"
                    onChange={this.onInputChange}
                    value={this.state.inputValue}
                />
                <button className="addTodo__button">Add</button>
            </form>
        );
    }
};


const mapDispatchToProps = {
    addTodoItem
}

export default connect(null, mapDispatchToProps)(AddTodo);