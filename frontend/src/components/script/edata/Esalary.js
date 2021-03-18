import React, { Component } from 'react';
import {onFetchSalary3} from './../../Redux/salary/Salaryaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Esalary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
    }
    
    componentDidMount(){
       // this.props.onFetchSalary3(this.state.id);
    }

    render() {
        const {salary}=this.props;
        console.log(this.props.salary.salary.basic)
        const {success5,error5}=this.props.salary;

        if(salary.datastate5=="NOT_INITIALIZED" || salary.datastate5=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            
       return (
        <div className="content-wrapper mt-5">

        <div className="container p-3 ml-5">
        <h1 className="text-center text-info sticky-top"> Salary </h1>

            <div className="container row justify-content-center">

            </div>
            {success5?<p className="text-success">{success5}</p>:null}
            {error5?<p className="text-danger">{error5}</p>:null}
        <div className="col-md-12"></div>
            <div className="row center">
                 {salary.salary.map((el,index)=>(
                     <div className="col-md-4 mt-1">
                     <div className="card bg-teal lighten-1" key={el._id}>
                     <div className="mx-3">

                     <h5>basic salary: {el.basic}</h5>
                     <h5>Allowance : {el.allowance}</h5>
                     <h5>Net: {el.net}</h5>
                     
                     </div>
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
    salary:state.salary,
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchSalary3})(withRouter(Esalary));
