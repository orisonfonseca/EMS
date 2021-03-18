import React, { Component } from 'react';
import {onFetchRole} from './../../Redux/role/Roleaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Erole extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
    }
    
    componentDidMount(){
        //this.props.onFetchRole();
    }

    render() {
        const {role}=this.props;
        const {success8,error8}=this.props.role;

        if(role.datastate8=="NOT_INITIALIZED" || role.datastate8=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            
       return (
        <div className="content-wrapper mt-5">

        <div className="container p-3 ">

            <div className="container row justify-content-center">
            </div>
            <h1 className="text-center text-info sticky-top">Role</h1>

            {success8?<p className="text-success">{success8}</p>:null}
            {error8?<p className="text-danger">{error8}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {role.role.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card bg-teal lighten-1">
                     <p className="mx-3">Role: {el.role}</p>
                
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
    role:state.role,
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchRole})(withRouter(Erole));
