import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddDepartment} from '../../Redux/department/Departmentaction';
import {NavLink} from 'react-router-dom'

import { Spinner } from 'reactstrap';

class Adddepartment extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            department:"",
            image:"",
            image1:"",
            ed:"",
            ei:""
           
        };
    }
    componentDidMount=()=>{
       // this.props.onFetchCategory();
    }
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleValidation(){
        var ed = "";
        var ei = "";

        var formIsValid = true;

        if(!this.state.department){
            formIsValid = false;
            ed = "Cannot be empty";
         }
         
         if(!this.state.image){
            formIsValid = false;
            ei = "Cannot be empty";
         }   
          
       this.setState({ed:ed,ei:ei});
       return formIsValid;
   }
    onFileChange=(ev)=>{
        this.setState({image:ev.target.files[0]});
        console.log(this.image);
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setState({image1:e.target.result});
          };
          reader.readAsDataURL(ev.target.files[0]);
       
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            department:this.state.department,
            image:this.state.image,
        }
        console.log(obj);
            this.props.onAddDepartment(obj,this.props.history);
            document.getElementById("myFile").value = "";
    }else{
        alert("Form has errors.")
     }
}

    render() {
        const {department,image1}=this.state;
        const {success9,error9}=this.props.department;
        const departments=this.props.department;
        if(departments.datastate9=="" || departments.datastate9==""){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }
        else{
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={'/view-department'}>Back</NavLink>

                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4 mt-3"> 
                   
                        <label>Add Department</label>
                        <br></br>
                        {success9?<p className="text-success">{success9}</p>:null}
                        {error9?<p className="text-danger">{error9}</p>:null}
                        
                        <div className="form-group">
                            <label>Department Name</label>
                            <input type="text" className="form-control" name="department" value={department} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ed}</span>

                        </div>
                        
                        <div className="form-group">
                            <label>Image:</label>
                            {image1?<img height="100" width="100" src={`${image1}`} />:null}<br></br>
                            <input type="file" className="form-control-file" name="image" onChange={this.onFileChange} className="filetype" id="myFile"/>
                            <span style={{color: "red"}}>{this.state.ei}</span>

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
}
const mapStateToProps=state=>({
    department:state.department,
});
export default connect (mapStateToProps, {onAddDepartment})(withRouter(Adddepartment));