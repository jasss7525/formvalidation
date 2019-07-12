import React from "react";

export default class InputValueDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ""
        }
    }
    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ""
        }));

    }

    render() {
        return (
            <div>
                <h1>ToDo App</h1>
                <h3>no. of students::{this.state.items.length}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  onChange={this.handleChange} value={this.state.text}/>
                    <button >click here</button>
                    <ToDoList items={this.state.items} />
                </form>
            </div>
        );
    }
}


class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.items.map((data, index) => (

                        <li key={data.id}>{data.text}</li>
                            
                    ))}
                </ol>
            </div>
        );
    }
}