import React, { Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddRole} from '../../Redux/role/Roleaction';

import { Spinner } from 'reactstrap';

class Addrole extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            role:"",
            er:""
        };
    }
  
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleValidation(){
        var er = "";
        var formIsValid = true;

        if(!this.state.role){
            formIsValid = false;
            er = "Cannot be empty";
         }
         
       this.setState({er:er});
       return formIsValid;
   }
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            role:this.state.role,
        }
            this.props.onAddRole(obj,this.props.history);
    }  else{
        alert("Form has errors.")
     }
    }

    render() {
        const {role}=this.state;
      
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={"/view-role"}>Back</NavLink>

                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4"> 
                   
                        <label>Add Role</label>
                        <br></br>
                    
                        <div className="form-group">
                            <label>Role</label>
                            <textarea type="text" className="form-control" name="role" value={role} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.er}</span>

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
    project:state.project,
});
export default connect (mapStateToProps, {onAddRole})(withRouter(Addrole));