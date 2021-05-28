import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import App from './components/app';
import TodoService from './services/todoService';
import TodoServiceContext from './components/todoServiceContext';
import './index.css';

const todoService = new TodoService();

ReactDOM.render(
                <Provider store={store}>
                    <TodoServiceContext.Provider value={todoService}>
                        <Router>
                            <App/>
                        </Router>
                    </TodoServiceContext.Provider>
                </Provider>
                ,document.getElementById('root'));


