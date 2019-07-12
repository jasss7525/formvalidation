import React from "react";

export default class Todo extends React.Component {

    constructor (props) {
        super(props);
        this.state={todos:[]};
    }
save =() => {
    var todos=[...this.state.todos]
    todos.push(this.newText.value);
    this.setState({todos});
}
render() {
    return(
        <div>
        <input type="text" ref={(jas) =>{this.newText=jas}} />
        <button onClick={this.save}>click here</button>
        <ul>{this.state.todos.map(function(todo) {
            return <li>{todo}</li>
        })}
        </ul>
        </div>
    );
}

}

