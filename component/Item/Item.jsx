import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit : false,
        }

        this.editTextToDo = this.editTextToDo.bind(this);
        this.togleEdit = this.togleEdit.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    editTextToDo(event) {
        return this.props.changeTextToDoAction(event.target.value, this.props.todo.id);
    }

    togleEdit() {
        return this.setState({ isEdit: !this.state.isEdit });
    }

    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.setState({ isEdit: !this.state.isEdit });
        }
    }

    render() {
        console.log("todo",this.props.todo)
        return(
            <div className="item">
                {
                    this.state.isEdit &&
                    <input 
                    className="item__input"
                    value={this.props.todo.textTodo}
                    onChange={this.editTextToDo}
                    onKeyDown={this.onKeyDown}
                    />
                }
                {
                    !this.state.isEdit &&
                    <span className="item__text"
                    onClick={this.togleEdit}
                    >
                        {this.props.todo.textTodo}
                    </span>
                    
                }
                <input
                className="item__checkbox" 
                type="checkbox"
                defaultChecked={this.props.todo.isDone}
                />
            </div>
        )
    }
};

export default Item;