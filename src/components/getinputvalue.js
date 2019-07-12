import React from "react";

export default class ToDoTry extends React.Component {
constructor(props)  {
    super(props);
    this.state={
        input:""
    }
}
handleChange= (event) =>{
    this.setState({val:event.target.value})
}

render () {
        return (
            <div>
                <form>
                <input type="text"onChange={this.handleChange} name="input" />
                <button type="submit">click here</button>
                <h1>{this.state.val}</h1>
            </form>
            </div>
        );
    }
}