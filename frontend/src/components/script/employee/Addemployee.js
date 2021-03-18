import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddEmployee} from '../../Redux/employee/Employeeaction';
import {onFetchDepartment} from '../../Redux/department/Departmentaction';
import {NavLink} from 'react-router-dom'
import { Spinner } from 'reactstrap';

class Addemployee extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
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
            password:"",
            dept:"",
            mobile:"",
            fields: {},
            errors: {}
        };
    }
    componentDidMount=()=>{
        this.props.onFetchDepartment();
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
  
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }
   
        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
         }
         if(!fields["gender"]){
            formIsValid = false;
            errors["gender"] = "Please select gender";
         }
         if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "Cannot be empty";
         }
         if(!fields["position"]){
            formIsValid = false;
            errors["position"] = "Cannot be empty";
         }
         if(!fields["reportto"]){
            formIsValid = false;
            errors["reportto"] = "Cannot be empty";
         }
         
         if(!fields["employmenttype"]){
            formIsValid = false;
            errors["employmenttype"] = "Please select employment type";
         }
         if(!fields["startdate"]){
            formIsValid = false;
            errors["startdate"] = "Please select Date of Joining";
         }
         if(!fields["dob"]){
            formIsValid = false;
            errors["dob"] = "Please select dob";
         }
         if(!this.state.image){
            formIsValid = false;
            errors["image"] = "Please select image";
         }
         if(!fields["mobile"]){
            formIsValid = false;
            errors["mobile"] = "Cannot be empty";
         }
         if(!fields["dept"]){
            formIsValid = false;
            errors["dept"] = "Please select department";
         }
         if(typeof fields["mobile"] !== "undefined"){
         if(fields["mobile"].length<10){
            formIsValid = false;
            errors["mobile"] = "Please enter atleast 10 nos";
         }
        else if(fields["mobile"].length>10){
            formIsValid = false;
            errors["mobile"] = "cannot be more than 10 nos";
         }
        }
         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
         }
    if(typeof fields["password"] !== "undefined"){
        if(!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ){
            formIsValid = false;
            errors["password"] = "password should contain atleast 8 characters with atleast 1 letter and 1 number";
         }
    }
          
       this.setState({errors: errors});
       return formIsValid;
   }
    
    onHandleChange(field, e){
        let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
        //this.setState({[e.target.name]:e.target.value});
        
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
                name:this.state.fields["name"],
                email:this.state.fields["email"],
                gender:this.state.fields["gender"],
                address:this.state.fields["address"],
                position:this.state.fields["position"],
                image:this.state.image,
                reportto:this.state.fields["reportto"],
                employmenttype:this.state.fields["employmenttype"],
                startdate:this.state.fields["startdate"],
                dob:this.state.fields["dob"],
                password:this.state.fields["password"],
                mobile:this.state.fields["mobile"],
                d_id:this.state.fields["dept"],
            }
            this.props.onAddEmployee(obj,this.props.history);
            this.setState({name:"",email:"",gender:"",address:"",position:"",image:"",image1:"",
            reportto:"",employmenttype:"",startdate:"",dob:"",password:"",salary:"",mobile:""});
            document.getElementById("myFile").value = "";
         }else{
            alert("Form has errors.")
         }
            
    }

    render() {
        const {name,email,address, position, image,image1,reportto,employmenttype,startdate,dob,password,mobile,dept}=this.state;
        const {success,error}=this.props.employees;
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
                                <h1 className="text-center text-info sticky-top"> Add Employee</h1>

                <div className="row justify-content-center">

                    <div className="col-md-5 card p-4 mt-3"> 

                        {success?<p className="text-success">{success}</p>:null}
                        {error?<p className="text-danger">{error}</p>:null}
                        
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name"  
                            value={this.state.fields["name"]} onChange={this.onHandleChange.bind(this,"name")}/>
                             <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.fields["email"]}
                             onChange={this.onHandleChange.bind(this,"email")}/>
                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Gender:</label><span>   </span>
                            <input type="radio" className="" name="gender"
                             value="male" onChange={this.onHandleChange.bind(this,"gender")}/>Male  
                            <span>   </span>
                            <input type="radio" className="" name="gender" 
                            value="female" onChange={this.onHandleChange.bind(this,"gender")}/>Female  
                            <span style={{color: "red"}}>  {this.state.errors["gender"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea type="text" className="form-control" name="address" 
                            value={this.state.fields["address"]} onChange={this.onHandleChange.bind(this,"address")}/>
                            <span style={{color: "red"}}>  {this.state.errors["address"]}</span>
                        </div>
                        <div className="form-group">
                            <label>Position</label>
                            <input type="text" className="form-control" name="position"
                             value={this.state.fields["position"]} onChange={this.onHandleChange.bind(this,"position")}/>
                             <span style={{color: "red"}}>  {this.state.errors["position"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Reports to</label>
                            <input type="text" className="form-control" name="reportto" 
                            value={this.state.fields["reportto"]} onChange={this.onHandleChange.bind(this,"reportto")}/>
                            <span style={{color: "red"}}>  {this.state.errors["reportto"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Employee Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.fields["password"]}
                             onChange={this.onHandleChange.bind(this,"password")}/>
                             <span style={{color: "red"}}>{this.state.errors["password"]}</span>

                        </div>
                        </div>
                        <div className="col-md-5 card ml-3 p-4 mt-3"> 
                        
                        <div className="form-group">
                            <label>Employment Type</label>
                            <select className="form-control" value={this.state.fields["employmenttype"]}
                             name="employmenttype" onChange={this.onHandleChange.bind(this,"employmenttype")}>
                                <option className="form-control" >Select option</option>
                                <option className="form-control" value="Full-time">Full-time</option>
                                <option className="form-control" value="Part-time">Part-time</option>
                                <option className="form-control" value="Intern">Intern</option>
                            </select>  
                            <span style={{color: "red"}}>{this.state.errors["employmenttype"]}</span>                      
                            </div>
                        <div className="form-group">
                            <label>Start date</label>
                            <input type="date" className="form-control" name="startdate" 
                            value={this.state.fields["startdate"]} onChange={this.onHandleChange.bind(this,"startdate")}/>
                            <span style={{color: "red"}}>{this.state.errors["startdate"]}</span>

                        </div>
                        <div className="form-group">
                            <label>DOB</label>
                            <input type="date" className="form-control" name="dob" 
                            value={this.state.fields["dob"]} onChange={this.onHandleChange.bind(this,"dob")}/>
                            <span style={{color: "red"}}>{this.state.errors["dob"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Image:</label>
                            {image1?<img height="100" width="100" src={`${image1}`} />:null}<br></br>
                            <input type="file" className="form-control-file" name="image" onChange={this.onFileChange} className="filetype" id="myFile"/>
                            <span style={{color: "red"}}>{this.state.errors["image"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" className="form-control" name="mobile" 
                            value={this.state.fields["mobile"]} onChange={this.onHandleChange.bind(this,"mobile")}/>
                           <span style={{color: "red"}}>{this.state.errors["mobile"]}</span>

                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <select className="form-control" name="dept"
                             value={this.state.fields["dept"]} onChange={this.onHandleChange.bind(this,"dept")}>
                                <option>--Select Department--</option>
                                {department.department.map((el,index)=>(
                                    <option key={el._id} value={el._id}>{el.department}</option>
                                ))}
                            </select>
                            <span style={{color: "red"}}>{this.state.errors["dept"]}</span>
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
    employees:state.employees,
    department:state.department,
});
export default connect (mapStateToProps, {onAddEmployee,onFetchDepartment})(withRouter(Addemployee));