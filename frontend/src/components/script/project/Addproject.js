import React, { Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddProject} from '../../Redux/project/Projectaction';

import { Spinner } from 'reactstrap';

class Addproject extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name:"",
            description:"",
            en:"",
            ed:""
        };
    }
  
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleValidation(){
        var en = "";
        var ed = "";

        var formIsValid = true;

        if(!this.state.name){
            formIsValid = false;
            en = "Cannot be empty";
         }
         
         if(!this.state.description){
            formIsValid = false;
            ed = "Cannot be empty";
         }
         
          
       this.setState({ed:ed,en:en});
       return formIsValid;
   }
    
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            name:this.state.name,
            description:this.state.description,
        }
        console.log(obj);
            this.props.onAddProject(obj,this.props.history);
    }else{
        alert("Form has errors.")
     }  
    }

    render() {
        const {name,description}=this.state;
      
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={'/view-project'}> Back</NavLink>

                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4"> 
                   
                        <label>Add Project</label>
                        <br></br>
                        <div className="form-group">
                            <label>Project title</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.en}</span>

                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="text" className="form-control" name="description" value={description} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ed}</span>

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
export default connect (mapStateToProps, {onAddProject})(withRouter(Addproject));