import React, { Component } from 'react';
import {onFetchDepartment} from './../../Redux/department/Departmentaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class ViewDepartment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }
    
    componentDidMount(){
        this.props.onFetchDepartment();
    }
    

    handle=(e)=>{
        this.setState({ search: e.target.value });
    }

    render() {
        const {department}=this.props;
        const { search } = this.state;
        const {success9,error9}=this.props.department;

        console.log(this.props)
        if(department.datastate9=="NOT_INITIALIZED" || department.datastate9=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            );
       }
        else {
            const filteredCountries = department.department.filter(country => {
                return country.department.toLowerCase().indexOf(search.toLowerCase()) !== -1;
              }); 
       return (
        <div className="container p-3 ">
            <div className="container row justify-content-center">
            <NavLink className="btn btn-primary" to={'/add-department'}>Add Department</NavLink>

            <input type="text" name="search" value={search} onChange={this.handle}></input>
            </div>
            {success9?<p className="text-success">{success9}</p>:null}
            {error9?<p className="text-danger">{error9}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {filteredCountries.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card bg-light">
                     <img className="card-img-top" height="150" width="150" src={`http://localhost:5000/${el.image}`}/>
                     <h2>Name: {el.department}</h2>
                    
                    
                     </div>
                 </div>
                 ))}
                
                
            </div>
        </div>
        );
        
        }
    }
}

const mapStateToProps=state=>({
    department:state.department,
})

export default connect(mapStateToProps,{onFetchDepartment})(withRouter(ViewDepartment));
