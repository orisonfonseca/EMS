import React, { Component } from 'react'
import {onResetPass} from '../Redux/auth/Authaction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

class Reset extends Component {
    constructor(props){
        super(props);
        this.state={password:"",ep:"",id:this.props.match.params.id};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        //console.log(this.state);
        const {password,id}=this.state;
        const user={password,id};
        this.props.onResetPass(user);
        this.setState({password:""});
    }else{
        alert("Form has errors.")
     }
}

    handleValidation(){
        var ep = "";

        var formIsValid = true;

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
         
          
       this.setState({ep:ep});
       return formIsValid;
   }

    render() {
        const {password}=this.state;
        const {error_msg,success_msg}=this.props.auth;
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 card mt-4 p-4">
                    <label className="text-center text-info mb-4">Reset Password</label>
                    <br></br>
                    <br></br>
                    {error_msg?<p className="alert alert-danger">{error_msg}</p>:""}
                    {success_msg?<p className="alert alert-success">{success_msg}</p>:""}

                    
                    <div className="form-group">
                        <label>New Password..... Min with 8 characters with atleast 1 letter and 1 number</label>
                        <input type="password" name="password" className="form-control" value={password} onChange={this.onHandleChange}/>
                        <span style={{color: "red"}}>{this.state.ep}</span>

                    </div>
                    <div className="text-center">
                        <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
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

export default connect(mapStateToProps, {onResetPass})(withRouter(Reset));