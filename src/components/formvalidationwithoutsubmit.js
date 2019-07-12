import React from "react";
import "../App.css";

export default class FormValidationWithoutSubmit extends React.Component {
constructor(props){
    super(props);
    this.state={
        name:"",
        email:"jasss",
        phone:"",
        passowrd:""
    }
}
// UserName--------------------------- 
handleName =(event) => {
    var UserName,msg;
    UserName=event.target.value
if (UserName !=="" && UserName.length< 4) {
     msg="short Username";
}
if (UserName.length>8) {
    msg="length exceeded";
}

this.setState({UserNameerrormsg:msg})
// this.setState({UserName:event.target.value})
}
// ---------------------------------------

// Email -----------------------
handleEmail =(event) => {
    var UserEmail,msg;
    UserEmail=event.target.value
if (UserEmail!==""&& UserEmail.length>2 &&UserEmail.split("").filter(x => x === "@").length !== 1 )  {
     msg="Must contain @ ";
}
this.setState({Emailerrormsg:msg})
// this.setState({UserName:event.target.value})
}
// -------------------------------

// -------phone  number-------------
handlePhone =(event)=> {
   var PhoneValue,msg;
    PhoneValue=event.target.value;
    if(isNaN(PhoneValue)) {
        msg="must be number";
    } else if(PhoneValue.length>10) {
        msg="invalid number"
    }
    this.setState({Phoneerrormsg:msg});
}
// --------------------



    render () {
        return (
            <div class="container">
            <form>
                <div Style='color:black;font-size:22px;text-align:center;'>SignUp</div>
                
                UserName:<input type="text" onChange={this.handleName} name="UserName"/><strong class="error">{this.state.UserNameerrormsg}</strong><br/><br/>
                
                Email-Id:<input type="text" name="Email"  onChange={this.handleEmail}/><strong class="error">{this.state.Emailerrormsg}</strong ><br/><br/>
                
                Phone-Num:<input type="text" name="phone" onChange={this.handlePhone}/><strong class="error">{this.state.Phoneerrormsg}</strong><br/><br/>
                
                password :<input type="password" name="password"/><br/><br/>
        
                
            </form>
            </div>
        );
    }
}


