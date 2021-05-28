import React from 'react';
import {Link} from 'react-router-dom';

import './appHeader.css';

const AppHeader = () => {
    return (
        <header className="header">
            <h1 className="header__title">TodoList</h1>
                <nav>
                    <ul className="header__list">
                        <li className="header__item">
                            <Link className="header__link "to="/">Home</Link>
                            <span>|</span>
                        </li>
                        
                        <li className="header__item">
                            <Link className="header__link "to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    );
};

export default AppHeader;