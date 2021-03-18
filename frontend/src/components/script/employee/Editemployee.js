import React, { Component } from 'react';
import {onUpdateEmployee, getSingleEmployee} from './../../Redux/employee/Employeeaction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import {onFetchDepartment} from '../../Redux/department/Departmentaction';
import {NavLink} from 'react-router-dom'

class Editemployee extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            name:"",
            email:"",
            gender:"",
            address:"",
            image:"",
            position:"",
            image1:"",
            reportto:"",
            employmenttype:"",
            startdate:"",
            dob:"",
            flag:"",
            mobile:"",
            dept:"",
            errorname:"",
            erroremail:"",
            erroradd:"",
            errorpos:"",
            errorrep:"",
            errormob:""
        }
        this.props.onFetchDepartment();
        const id=props.match.params.id;
        this.getSingleEmployeeAction(id);
        
    }

    getSingleEmployeeAction=async (id)=>{
       const res= await this.props.getSingleEmployee(id);
      console.log(res);
      
     
      
       if(res){
        const date = new Date(res.dob),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        const ttt= [date.getFullYear(), mnth, day].join("-");
        
        const date2 = new Date(res.startdate),
        mnth2 = ("0" + (date2.getMonth() + 1)).slice(-2),
        day2 = ("0" + date2.getDate()).slice(-2);
        const tt= [date2.getFullYear(), mnth2, day2].join("-");

           this.setState({name:res.name,email:res.email,gender:res.gender,address:res.address,
                        id:res._id,position:res.position,image:res.image,reportto:res.reportto,
                        employmenttype:res.employmenttype,startdate:tt,dob:ttt,dept:res.d_id,mobile:res.mobile})
       }
    }
   
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }
    handleValidation(){
        var errorname = "";
        var erroremail = "";
        var erroradd="";
        var errorpos="";
        var errorrep="";
        var errormob="";

        var formIsValid = true;

        //Name
        if(!this.state.name){
           formIsValid = false;
           errorname = "Cannot be empty";
        }
  
        if(typeof this.state.name !== "undefined"){
           if(!this.state.name.match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errorname = "Only letters";
           }        
        }
   
        //Email
        if(!this.state.email){
            formIsValid = false;
            erroremail = "Cannot be empty";
         }
         
         if(!this.state.address){
            formIsValid = false;
            erroradd = "Cannot be empty";
         }
         if(!this.state.position){
            formIsValid = false;
            errorpos = "Cannot be empty";
         }
         if(!this.state.reportto){
            formIsValid = false;
            errorrep = "Cannot be empty";
         }
         
         if(!this.state.mobile){
            formIsValid = false;
            errormob = "Cannot be empty";
         }
         
         if( this.state.mobile != ""){
         if(this.state.mobile.length<10){
            formIsValid = false;
            errormob = "Please enter atleast 10 nos";
         }
        else if(this.state.mobile.length>10){
            formIsValid = false;
            errormob = "cannot be more than 10 nos";
         }
        }
         if(this.state.email != ""){
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
               formIsValid = false;
               erroremail = "Email is not valid";
             }
        }
     
          
       this.setState({errorname:errorname,erroremail:erroremail,erroradd:erroradd,
                    errorpos:errorpos,errorrep:errorrep,errormob:errormob});
       return formIsValid;
   }

    onSubmit=()=>{
        //console.log(this.state);
        if(this.handleValidation()){

        const obj={
            name:this.state.name,
            email:this.state.email,
            gender:this.state.gender,
            address:this.state.address,
            id:this.state.id,
            image:this.state.image,
            position:this.state.position,
            reportto:this.state.reportto,
            employmenttype:this.state.employmenttype,
            startdate:this.state.startdate,
            dob:this.state.dob,
            d_id:this.state.dept,
            mobile:this.state.mobile,
        }
        console.log(obj);
        this.props.onUpdateEmployee(obj, this.props.history);
    }else{
        alert("Form has errors.")
    }
    }

    onFileChange=(ev)=>{
        this.setState({image:ev.target.files[0]});
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setState({flag:"true",image1:e.target.result});
          };
          reader.readAsDataURL(ev.target.files[0]);
    }

    render() {
        const {name,email,gender,address,position,image,image1,flag,reportto,employmenttype,startdate,dob,dept,mobile}=this.state;
        const employees = this.props.employees;
        const department=this.props.department;

        if(department.datastate9=="NOT_INITIALIZED" || department.datastate9=="FETCHING"){
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
                 <NavLink className="btn btn-dark mt-3" to={'/view-employee'}>Back</NavLink>

                <div className="row justify-content-center">
                    <div className="col-md-5 card p-4"> 
                        <h1 className="sticky-top">Edit Employee</h1>
                    
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorname}</span>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.erroremail}</span>

                        </div>
                        <div className="form-group">
                            <label>Gender:  </label>
                            <input className="form-control center" type="radio" name="gender" className="form-control-check" value="male" checked={gender==="male"} onChange={this.onHandleChange}/>Male
                            <input className="form-control center" type="radio" name="gender" className="form-control-check" value="female" checked={gender==="female"} onChange={this.onHandleChange} />Female 

                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea type="text" className="form-control" name="address" value={address} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.erroradd}</span>

                        </div>
                        <div className="form-group">
                            <label>Position</label>
                            <input type="text" className="form-control" name="position" value={position} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorpos}</span>

                        </div>
                        <div className="form-group">
                            <label>Reports to</label>
                            <input type="text" className="form-control" name="reportto" value={reportto} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorrep}</span>

                        </div>
                        </div>
                        <div className="col-md-5 card ml-2 p-4">
                        <div className="form-group">
                            <label>Employment Type</label>
                            <select value={employmenttype} name="employmenttype" onChange={this.onHandleChange}>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Intern">Intern</option>
                            </select>                        
                            </div>
                        <div className="form-group">
                            <label>Start date</label>
                            <input type="date" className="form-control" name="startdate" value={startdate} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>DOB</label>
                            <input type="date" className="form-control" name="dob" value={dob} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <select className="form-control" name="dept" value={dept} onChange={this.onHandleChange}>
                                <option>--Select Department--</option>
                                {department.department.map((el,index)=>(
                                    <option key={el._id} value={el._id}>{el.department}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" className="form-control" name="mobile" value={mobile} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errormob}</span>

                        </div>
                        <div className="form-group">
                            <label>Image:</label>
                           {flag?<img height="100" width="100" src={`${image1}`}/>:<img height="100" width="100" src={`http://localhost:5000/${image}`}/>}
                            <input type="file" className="form-control-file" name="image" onChange={this.onFileChange} id="myFile"/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        )}
    }
}
const mapStateToProps=state=>({
    employees:state.employees,
    department:state.department,
});

export default connect (mapStateToProps, {onUpdateEmployee, getSingleEmployee,onFetchDepartment})(withRouter(Editemployee));