import React, { Component } from 'react';
import {onFetchSalary, onDeleteSalary,OnDissappear} from './../../Redux/salary/Salaryaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';


class Viewparticularsalary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }

    
    componentDidMount=()=>{
        this.props.onFetchSalary(this.props.match.params.id);

    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteSalary(id);
        if(res){
            this.props.onFetchSalary(this.props.match.params.id);
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }

    render() {
        const {salary}=this.props;
        const {success5,error5}=this.props.salary;
        console.log(this.props)
        if(this.props.salary.success5 || this.props.salary.error5){
            this.disappear();
        }
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

        <div className="container py-5 mr-5">
                <NavLink className="btn btn-dark" to={'/view-salary'}>Back</NavLink>

                <h1 className="text-center text-info sticky-top"> Salary</h1>
                {success5?<p className="alert alert-success">{success5}</p>:null}
                {error5?<p className="alert alert-danger">{error5}</p>:null}
                <div className="col-md-12"></div>
                <div className="row">
                 {salary.salary.map((el,index)=>(
                     <div className="col-md-4 mt-1">
                     <div className="card bg-teal lighten-1">
                     <div className="mx-3">

                     <h5>Basic salary: {el.basic}</h5>
                     <h5>Allowance : {el.allowance}</h5>
                     <h5>Net: {el.net}</h5>
                     </div>

                    <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                    <NavLink className="btn btn-info btn-sm" to={`edit-salary/${el._id}`}>Edit</NavLink></p>
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
})

export default connect(mapStateToProps,{onFetchSalary, onDeleteSalary,OnDissappear})(withRouter(Viewparticularsalary));
