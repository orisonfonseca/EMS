import React, { Component } from 'react';
import {onUpdateRole, getSingleRole} from './../../Redux/role/Roleaction';
import {withRouter,NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';

class Editrole extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            role:"",
            er:""
        }
        const id=props.match.params.id;
        this.getSingleRole1(id);
        
    }

    getSingleRole1=async (id)=>{
       const res= await this.props.getSingleRole(id);
      console.log(res);
       if(res){
           this.setState({id:res._id,role:res.role})
       }
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
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }

    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            role:this.state.role,
            id:this.state.id,
        }
       console.log(obj);
       const hist=this.props.history

       this.props.onUpdateRole(obj,hist);
        }else{
            alert("Form has errors.")
         }
    }

    render() {
        const {role}=this.state;
        
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4 mt-5"> 
                        <h1 className="sticky-top">Role</h1>
                        
                        <div className="form-group">
                            <label>Edit Role</label>
                            <textarea type="text" className="form-control" name="role" value={role} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.er}</span>

                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            <NavLink className="btn btn-warning" to={"/view-role"}>cancel</NavLink>

			            </div>
                        
                    </div>
                </div>
            </div>
            </div>

        )
    }
}
const mapStateToProps=state=>({
    role:state.role,
    
});

export default connect (mapStateToProps, {onUpdateRole, getSingleRole})(withRouter(Editrole));