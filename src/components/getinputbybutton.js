import React from "react";

export default class GetInputByButton extends React.Component {
constructor(props) {
    super(props);
    this.state={
        value:""
    }
}

handleChange= (event) => {

    this.setState({value:event.target.value})

}
handleClick=(event)=> {
   var submit;
   submit= document.getElementById('demo').innerHTML=this.state.value;
    event.preventDefault()
  }
render () {
    return (
        <div>
            <form onClick={this.handleClick}>
            <input onChange={this.handleChange} type="text"/>
            <input   type="submit" value="click here"/>
            <h1 id='demo'></h1>
        </form>
        
        </div>
    );
}

}