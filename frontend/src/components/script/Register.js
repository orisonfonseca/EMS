import React, { Component } from 'react';
import {onRegister} from '../Redux/auth/Authaction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super();
        this.state={name:"", email:"",password:"",ee:"",ep:"",en:""};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        //console.log(this.state);
        const {name,email,password,gender}=this.state;
        const user={name,email,password,gender};
        this.props.onRegister(user);
        this.setState({name:"", email:"",password:""});
        }else{
            alert("Form has errors.")
         }
    }
    handleValidation(){
        var ee = "";
        var ep = "";
        var en=""

        var formIsValid = true;

        if(!this.state.email){
            formIsValid = false;
            ee = "Cannot be empty";
         }
         if(!this.state.name){
            formIsValid = false;
            en = "Cannot be empty";
         }

         if(this.state.email != ""){
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
               formIsValid = false;
               ee = "Email is not valid";
             }
        }
         
         if(!this.state.password){
            formIsValid = false;
            ep = "Cannot be empty";
         }
         if( this.state.password != ""){
            if(!this.state.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ){
                formIsValid = false;
                ep = "password should contain atleast 8 characters with atleast 1 letter and 1 number";
             }
        }
         
          
       this.setState({ee:ee,ep:ep,en:en});
       return formIsValid;
   }

    render() {
        const {name,email,password}=this.state;
        //console.log(this.props);
        const {success_msg, error_msg}=this.props.auth;
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 card mt-4 p-4">
                    <h1 className="text-center text-info mb-4">Registration</h1>
                    <br></br>
                    <br></br>
                    {success_msg?<p className="text-success">{success_msg}</p>:""}
                    {error_msg?<p className="alert alert-danger">{error_msg}</p>:""}
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={name} onChange={this.onHandleChange}/>
                        <span style={{color: "red"}}>{this.state.en}</span>

                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}/>
                        <span style={{color: "red"}}>{this.state.ee}</span>

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" value={password} onChange={this.onHandleChange}/>
                        <span style={{color: "red"}}>{this.state.ep}</span>

                    </div>
                    <div className="text-center">
                        <button className="btn btn-info" onClick={this.onSubmit}>Register</button>
                        <p>Already Registered <Link to="/">Click</Link> To Login</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps=state=>({
    auth:state.auth,
})

export default connect(mapStateToProps, {onRegister})(withRouter(Register));
