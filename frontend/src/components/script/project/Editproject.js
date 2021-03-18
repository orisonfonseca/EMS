import React, { Component } from 'react';
import {onUpdateProject, getSingleProject} from './../../Redux/project/Projectaction';
import {withRouter,NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';

class Editproject extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            name:"",
            description:"",
            trek:"",
            en:"",
            ed:""
        }
        const id=props.match.params.id;
        this.getSingleProject1(id);
        
    }

    getSingleProject1=async (id)=>{
       const res= await this.props.getSingleProject(id);
      
       if(res){
           this.setState({id:res._id,name:res.name,description:res.description})
       }
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
            id:this.state.id,
        }
       console.log(obj);
       const hist=this.props.history

       this.props.onUpdateProject(obj,hist);
        }else{
            alert("Form has errors.")
         }  
    }

    render() {
        const {name,description}=this.state;
        
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4 mt-5"> 
                        <h1 className="sticky-top">Edit Project</h1>
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
                            <NavLink className="btn btn-warning" to={'/view-project'}>cancel</NavLink>

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

export default connect (mapStateToProps, {onUpdateProject, getSingleProject})(withRouter(Editproject));