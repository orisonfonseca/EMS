import React, { Component } from 'react';
import {onFetchRole, onDeleteRole,OnDissappear} from './../../Redux/role/Roleaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Viewrole extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }
    
    componentDidMount(){
        this.props.onFetchRole();
    }
    

    handle=(e)=>{
        this.setState({search: e.target.value});
    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteRole(id);
        if(res){
            this.props.onFetchRole(this.props.match.params.id);
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {role}=this.props;
        const { search } = this.state;
        const {success8,error8}=this.props.role;

        console.log(this.props)
        if(this.props.role.success8 || this.props.role.error8){
            this.disappear();
        }
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
            <NavLink className="btn btn-primary" to={'/add-role'}>Add Role</NavLink>
            <div className="container row justify-content-center">
            </div>
            {success8?<p className="alert alert-success">{success8}</p>:null}
            {error8?<p className="alert alert-danger">{error8}</p>:null}
        <div className="col-md-12"></div>
            <div className="row">
                 {role.role.map((el,index)=>(
                     <div className="col-md-3 mt-1">
                     <div className="card bg-teal lighten-1">
                     <h5 className="mx-3">Role: {el.role}</h5>

                    <p> <button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                    <NavLink className="btn btn-info btn-sm" to={`edit-role/${el._id}`}>Edit</NavLink></p>
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
})

export default connect(mapStateToProps,{onFetchRole, onDeleteRole,OnDissappear})(withRouter(Viewrole));
