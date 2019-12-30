import React from 'react';

import Item from '../Item';
import './list-item';

const ListItem = ({
    todos
}) => {

    return (
        <div className="list-item">
        {
                todos.map((elem) => {
                return (
                    <Item 
                    textTodo={elem.textTodo}
                    isDone={elem.isDone}
                    key={elem.id}
                    />
                )
            })
        }
        </div>
    )
};

export default ListItem;