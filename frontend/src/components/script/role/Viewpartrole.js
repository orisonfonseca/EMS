import React, { Component } from 'react';
import {onFetchRole, onDeleteRole} from './../../Redux/role/Roleaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Viewpartrole extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }

    
    componentDidMount=()=>{
        this.props.onFetchRole(this.props.match.params.id);

    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteRole(id);
        if(res){
            this.props.onFetchRole(this.props.match.params.id);
        }
    }


    render() {
        const {role}=this.props;
        
        const { search } = this.state;
        const {success8,error8}=this.props.role;
      
        if(role.datastate8=="NOT_INITIALIZED" || role.datastate8=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            );
       }
        else {
            
       return (
        <div className="container py-5 mr-5">
                <NavLink className="btn btn-dark" to={'/view-role'}>Back</NavLink>

                <h1 className="text-center text-info sticky-top"> Leave Application's</h1>
                {success8?<p className="text-success">{success8}</p>:null}
                {error8?<p className="text-danger">{error8}</p>:null}
                <table className="table">
                    <thead className="thead-dark">
                       <th>Role</th> 
                       <th>Action</th>

                   </thead>
                    <tbody>
                    {role.role.map((el,index)=>(
                        <tr key={index}>
                            <td>{el.role}</td>
                            <td>
                            <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                             <NavLink className="btn btn-info btn-sm" to={`edit-role/${el._id}`}>Edit</NavLink></p>
                            </td>
                       </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
        
        }
    }
}

const mapStateToProps=state=>({
    role:state.role,
})

export default connect(mapStateToProps,{onFetchRole, onDeleteRole})(withRouter(Viewpartrole));
