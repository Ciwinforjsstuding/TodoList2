import React from 'react';

import { getId } from '../../tools/getId';

class InputTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valueInput: ''
        }

        this.changeInput = this.changeInput.bind(this);
        this.sendTodo = this.sendTodo.bind(this);
    }

    sendTodo() {
        this.props.addTodoAction(this.state.valueInput, getId());
    }

    changeInput(event) {
        this.setState({ valueInput: event.target.value });
    }

    render() {
        return (
            <div className="wrapper-input-todo">
                <input
                className="input__todo"
                type="text"
                placeholder="Введите дело"
                value={this.state.valueInput}
                onChange={this.changeInput}
                />
                <button
                className="input__btn"
                onClick={this.sendTodo}
                >
                    Add task
                </button>
            </div>
        )
    }
};

export default InputTodo;