import React, { Component } from 'react';
import {onFetchEmployee2} from './../../Redux/employee/Employeeaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Edetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
    }
    
    componentDidMount(){
        this.props.onFetchEmployee2(this.state.id);
    }

    render() {
        const {employees}=this.props;
        const { search } = this.state;
        
        const {success,error}=this.props.employees;
        console.log(this.props)
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
        <div className="content-wrapper mt-5">

        <div className="container p-3 ml-5">
        <h1 className="text-center text-info sticky-top">Details</h1>

            <div className="container row justify-content-center">

            </div>
            {success?<p className="text-success">{success}</p>:null}
            {error?<p className="text-danger">{error}</p>:null}
        <div className="col-md-12"></div>
            <div className="row center">
                 {filteredCountries.map((el,index)=>(
                     <div className="col-md-4 mt-1 ">
                     <div className="card stylish-color-dark text-white" key={el._id}>
                     <img className="card-img-top" height="250" width="300" src={`http://localhost:5000/${el.image}`}/>
                     <h4 className="ml-2">Name: {el.name}</h4>
                     <p className="ml-2">Email: {el.email} </p> 
                     <p className="ml-2">Position: {el.d_id.department}</p>
                     <p className="ml-2">Joining: {el.startdate.slice(0,-14)}</p>
                     <p className="ml-2">Gender: {el.gender} </p> 
                     <p className="ml-2">Address: {el.address} </p> 
                     <p className="ml-2">Reporting mng: {el.reportto} </p> 
                     <p className="ml-2">DOB: {el.dob.slice(0,-14)} </p> 
                     <p className="ml-2">Contact: {el.mobile} </p>
                     
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
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchEmployee2})(withRouter(Edetails));
