import React, { Component } from 'react';
import {onFetchEmployee} from './../../Redux/employee/Employeeaction';
import {OnDissappear} from './../../Redux/salary/Salaryaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Viewusalary extends Component {
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
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {employees}=this.props;
        const { search } = this.state;
        const {success5,error5}=this.props.salary;

        console.log(this.props)
        if(this.props.salary.success5 || this.props.salary.error5){
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
       return (
        <div className="content-wrapper">

        <div className="container p-3 mt-5">
            <div className="container row justify-content-center">
            <input type="text" name="search" value={search} placeholder="search" onChange={this.handle}></input>
            </div>
            {success5?<p className="alert alert-success">{success5}</p>:null}
            {error5?<p className="alert alert-danger">{error5}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {filteredCountries.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card ">
                     <img className="card-img-top" height="150" width="150" src={`http://localhost:5000/${el.image}`}/>
                     <h6 className="mx-2">Name: {el.name}</h6>
                     <p key={el._id}></p>

                    <NavLink className="btn btn-success btn-sm" to={`add-salary/${el._id}`}>Add Salary</NavLink>
                     <NavLink className="btn btn-info btn-sm" to={`/view-partsalary/${el._id}`}>View Salaries</NavLink>
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
    salary:state.salary,
})

export default connect(mapStateToProps,{onFetchEmployee,OnDissappear})(withRouter(Viewusalary));
