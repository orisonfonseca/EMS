import React, { Component } from 'react';
import {onFetchEmployee, onDeleteEmployee,OnDissappear} from './../../Redux/employee/Employeeaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Viewemployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }
    
    componentDidMount(){
        this.props.onFetchEmployee();
    }
    
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteEmployee(id);
        if(res){
            this.props.onFetchEmployee();
        }
    }

    handle=(e)=>{
        this.setState({ search: e.target.value });
    }
     myFunction=(id)=> {
        var dots = document.getElementById(`dots${id}`);
        var moreText = document.getElementById(`more${id}`);
        var btnText = document.getElementById(`${id}`);
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
      disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {employees}=this.props;
        const { search } = this.state;
        
          //  const filteredCountries = employees.employees.filter(country => {
          //      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
           //   });
        
        
        

        const {success,error}=this.props.employees;
        console.log(this.props)

        if(this.props.employees.success || this.props.employees.error){
            this.disappear();
        }

        if(employees.datastate=="NOT_INITIALIZED" || employees.datastate=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                <Spinner color="primary" className="ml-5 mt-5" />
           </div>
            );
       }
        else {
            const filteredCountries = employees.employees.filter(country => {
                return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
              }); 
       return (<div class="content-wrapper ">
           
        <div className="container mt-5">
            <div className="container row justify-content-center">
            <NavLink className="btn btn-primary mt-3" to={"/add-employee"}>Add Employee</NavLink>

            <input type="text" className="form-control-lg mt-3" name="search" placeholder="search" value={search} onChange={this.handle}>

            </input>

            </div>
            {success?<p className="alert alert-success">{success}</p>:null}
            {error?<p className="alert alert-danger">{error}</p>:null}
        <div className="col-md-12"></div>
            <div className="row center">
                 {filteredCountries.map((el,index)=>(
                     <div className="col-md-4 mt-1">
                     <div className="card stylish-color-dark text-white" key={el._id}>
                     <img className="card-img-top" height="250" width="300" src={`http://localhost:5000/${el.image}`}/>
                     <h4 className="ml-2">Name: {el.name}</h4>
                     <p className="ml-2"> <span  style={{transition:"0.5s"}} id={`dots${el._id}`}>...</span><span id={`more${el._id}`} style={{display:"none",transition:"0.5s"}} >
                     <p>Email: {el.email} </p> 
                     <p>Position: {el.d_id.department}</p>
                     <p>Joining: {el.startdate}</p>
                     <p>Gender: {el.gender} </p> 
                     <p>Address: {el.address} </p> 
                     <p>Reporting mng: {el.reportto} </p> 
                     <p>DOB: {el.dob} </p> 
                     <p>Contact: {el.mobile} </p></span></p> 
                     <p><button className="btn btn-dark btn-sm" onClick={()=>this.myFunction(el._id)} id={`${el._id}`}>Read more</button></p>
                     <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                     <NavLink className="btn btn-success btn-sm" to={`edit-employee/${el._id}`}>Edit</NavLink></p>
                     </div>
                 </div>
                 ))}
                
                
            </div>
        </div>
        </div>
        );
        
        }
    }
}

const mapStateToProps=state=>({
    employees:state.employees,
})

export default connect(mapStateToProps,{onFetchEmployee,onDeleteEmployee,OnDissappear})(withRouter(Viewemployee));
