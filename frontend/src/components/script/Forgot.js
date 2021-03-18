import React, { Component } from 'react'
import {onForgotPass} from '../Redux/auth/Authaction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class Forgot extends Component {
    constructor(props){
        super();
        this.state={email:"",ee:""};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const {email}=this.state;
        const user={email};
        this.props.onForgotPass(user);
        this.setState({email:""});
        }else{
            alert("Form has errors.")
         }
    }
    handleValidation(){
        var ee = "";

        var formIsValid = true;

        if(!this.state.email){
            formIsValid = false;
            ee = "Cannot be empty";
         }

         if(this.state.email != ""){
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
               formIsValid = false;
               ee = "Email is not valid";
             }
        }
           
       this.setState({ee:ee});
       return formIsValid;
   }


    render() {
        const {email}=this.state;
        const {success_msg,error_msg}=this.props.auth;
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 card mt-4 p-4">
                    <h1 className=" text-center text-info mb-4">Forgot Password</h1>
                    <br></br>
                    <br></br>
                    {error_msg?<p className="alert alert-danger">{error_msg}</p>:""}
                    {success_msg?<p className="alert alert-success">{success_msg}</p>:""}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}/>
                        <span style={{color: "red"}}>{this.state.ee}</span>
                    </div>
                   
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onSubmit}>Send</button>
                        <Link className="btn btn-dark" to="/">Admin Login</Link>
                        
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

export default connect(mapStateToProps, {onForgotPass})(withRouter(Forgot));