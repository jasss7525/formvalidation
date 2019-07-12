import React from "react";
import "../Try/styles.css";
export default class ToDo extends React.Component {
constructor(props) {
    super(props);
    this.state={
        items:[],
        text:""
    }
}

handleChange = (event)=> {
    this.setState({text:event.target.value})
}

handleSubmit=(event) => {
    event.preventDefault()
    if(!this.state.text.length) {
        return
    }
    const newItem ={text:this.state.text}

    this.setState(prevState => ({
        items:prevState.items.concat(newItem),
        text:""
    }))

}
handleDelete= (index) => {
    const items= this.state.items.filter((todo,todoindex) =>{
        return todoindex!==index;
    })
    this.setState({items})
}


    render () {
    return(

        <div class="container">
            <div class="container-1">
            <h1 class="heading">ToDo App</h1>
            <h2>No. of items added::{this.state.items.length}</h2>
            <form class="form" onSubmit={this.handleSubmit}>
                <input class="input" onChange={this.handleChange} value={this.state.text}type="text"/>
                <button class="btn"  type="submit">click here </button>
                <ToDoList items={this.state.items} delete={this.handleDelete}/>
            </form>
        </div>
        </div>
    );
}

}


class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.items.map((data,index)=>(
                        <li key={data.id}><button onClick={(e)=>this.props.delete(index)}>X</button>{data.text}</li>
                    ))}
                </ol>
            </div>
        );
    }
}