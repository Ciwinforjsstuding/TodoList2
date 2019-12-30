import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        // console.log("this.props",this.props)
        return(
            <div className="item">
                <span className="item__text">
                    {this.props.textTodo}
                </span>
                <input
                className="item__checkbox" 
                type="checkbox"
                defaultChecked={this.props.isDone}
                />
            </div>
        )
    }
};

export default Item;