import React from "react";

export default class FormValidation extends React.Component {
constructor(props){
    super(props);
    this.state={
        name:"",
        email:"",
        phone:"",
        passowrd:""
    }
}
handleName =(event) => {
    var UserName=event.target.value
if (UserName !=="" && UserName.length< 4) {
    var msg="short Username";
}
if (UserName.length>8) {
   var msg="UserName length exceeded";
}

}
this.setState({errormsg:msg})
}


    render () {
        return (
            <div>
            <form>
                Name:<input type="text" onChange={this.handleName} name="UserName"/>{this.state.errormsg}<br/><br/>
                Email:<input type="text" name="email"/><br/><br/>
                Phone:<input type="text" name="phone"/><br/><br/>
                password:<input type="text" name="password"/>
            </form>
            </div>
        );
    }
}