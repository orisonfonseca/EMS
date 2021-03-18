import React, { Component } from 'react'
import {onLogin} from '../Redux/eauth/Eauthaction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class Elogin extends Component {
    constructor(props){
        super();
        this.state={email:"",password:"",ee:"",ep:""};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        //console.log(this.state);
        const {email,password}=this.state;
        const user={email,password};
        this.props.onLogin(user,this.props.history);
        this.setState({email:"",password:""});
        }else{
            alert("Form has errors.")
         }
    }

    handleValidation(){
        var ee = "";
        var ep = ""

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
         
         if(!this.state.password){
            formIsValid = false;
            ep = "Cannot be empty";
         }
         
          
       this.setState({ee:ee,ep:ep});
       return formIsValid;
   }

    render() {
        const {email,password}=this.state;
        const {error_msg}=this.props.eauth;
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 card mt-4 p-4">
                    <h1 className="text-center text-info mb-4">Employee Login</h1>
                    <br></br>
                    <br></br>
                    {error_msg?<p className="alert alert-danger">{error_msg}</p>:""}
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
                        <button className="btn btn-dark" onClick={this.onSubmit}>Login</button>
                        <Link className="btn btn-primary" to="/">Admin Login</Link>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps=state=>({
    eauth:state.eauth,
})

export default connect(mapStateToProps, {onLogin})(withRouter(Elogin));