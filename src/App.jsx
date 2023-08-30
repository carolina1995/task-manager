import React from 'react';
import Home from './home';

import '../src/styles/styles.css';
import { Header } from './Header';

export function App(props) {
    return (
        <div className='App'>
            <Header/>
            <Home></Home>
        </div>
    );
}
