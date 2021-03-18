import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import {onChangePass,OnDissappear} from '../../Redux/auth/Authaction'

class Changeps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: this.props.auth.user.email,
             old:"",
             nep:"",
             eo:"",
             en:"",
             ro:""
        }
    }
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleValidation(){
        var eo="";
        var en="";

        var formIsValid = true;

        if(!this.state.old){
            formIsValid = false;
            eo = "Cannot be empty";
         }
         
         if(!this.state.nep){
            formIsValid = false;
            en = "Cannot be empty";
         }
         if( this.state.nep != ""){
            if(!this.state.nep.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ){
                formIsValid = false;
                en = "password should contain atleast 8 characters with atleast 1 letter and 1 number";
             }
        }
          
       this.setState({eo:eo,en:en});
       return formIsValid;
   }

    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            email:this.state.email,
            old:this.state.old,
            nep:this.state.nep
        }
        console.log(obj);
            this.props.onChangePass(obj);
            this.setState({old:"",nep:""});
    }else{
        alert("Form has errors.")
     }    
    }

    disappear5=()=>{
        this.props.OnDissappear();
    }

    render() {
        const {success_msg,error_msg}=this.props.auth;
        const {nep,old}=this.state;
        const auth = this.props
        if(this.props.auth.success_msg || this.props.auth.error_msg){
            this.disappear5();
        }
        
            return (
                <div className="content-wrapper mt-5">
                                        <div className="row mt-5">
                                        
                      <div className="container-fluid ">
                      <h1 className="text-center text-info sticky-top mt-5"> Change Password</h1>
                <div className="container col-md-5 card p-3 mt-5">
    
                    {success_msg?<p className="alert alert-success">{success_msg}</p>:null}
                    {error_msg?<p className="alert alert-danger">{error_msg}</p>:null}
                    <div className="form-group">
                                <label>Old Password</label>
                                <input type="password" className="form-control" name="old" value={old} onChange={this.onHandleChange}/>
                                <span style={{color: "red"}}>{this.state.eo}</span>
    
                            </div>
                         
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" className="form-control" name="nep" value={nep} onChange={this.onHandleChange}/>
                                <span style={{color: "red"}}>{this.state.en}</span>
    
                            </div>
                            <div className="text-center">
                                <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            </div>
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
export default connect(mapStateToProps,{onChangePass,OnDissappear})(withRouter(Changeps));