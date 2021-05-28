import React from 'react';
import {Route} from 'react-router-dom';
import AppHeader from '../appHeader';
import AddTodo from '../addTodo';
import TodoList from '../todoList';
import About from '../pages/about';

import './app.scss';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <Route path="/"exact render={() => {
                return (
                    <>
                        <AddTodo/>
                        <TodoList/>
                    </>
                )
            }}/>
            <Route path="/about" component={About}/>
        </div>
    )
}

export default App;