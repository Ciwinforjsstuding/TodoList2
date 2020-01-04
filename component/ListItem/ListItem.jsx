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
                    todo={elem}
                    key={elem.id}
                    />
                )
            })
        }
        </div>
    )
};

export default ListItem;