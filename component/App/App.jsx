import React from 'react';

import './app-style';
import InputTodo from '../InputTodo';
import ListItem from '../ListItem';

const App = () => {

    return(
        <div className="app">
            <InputTodo />
            <ListItem />
        </div>
    )
};

export default App;