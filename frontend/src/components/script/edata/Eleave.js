import React, { Component } from 'react';
import {onFetchLeave3,onDeleteLeave,OnDissappear} from './../../Redux/leave/Leaveaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Eleave extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
    }
    
    componentDidMount(){
        this.props.onFetchLeave3(this.state.id);
    }

    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteLeave(id);
        if(res){
            this.props.onFetchLeave3(this.state.id);
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {leave}=this.props;
        
        const {success6,error6}=this.props.leave;
        if(this.props.leave.success6 || this.props.leave.error6){
            this.disappear();
        }
        if(leave.datastate6=="NOT_INITIALIZED" || leave.datastate6=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
            
       return (
        <div className="content-wrapper">

        <div className="container py-5  mt-5">
                    <NavLink className="btn btn-primary" to={`add-leave2/${this.state.id}`}>Apply for Leave</NavLink>

        <h1 className="text-center text-info sticky-top">Leave</h1>
        {success6?<p className="text-success">{success6}</p>:null}
        {error6?<p className="text-danger">{error6}</p>:null}
        <table className="table table-responsive">
            <thead className="thead-dark">
                       <th>From</th> 
                       <th>To</th>
                       <th>Reason</th>
                       <th>Description</th>
                       <th>Status</th>
                       <th>Action</th>

           </thead>
            <tbody>
            {leave.leave.map((el,index)=>(
                <tr key={index}>
                    <td>{el.from.slice(0,-14)}</td>
                            <td>{el.to.slice(0,-14)}</td>
                            <td>{el.reason}</td>
                            <td>{el.description}</td>
                            <td>{el.status}</td>
                            <td>
                            <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                             <NavLink className="btn btn-info btn-sm" to={`edit-leave2/${el._id}`}>Edit</NavLink></p>
                            </td>
                    
               </tr>
            ))}
            </tbody>
        </table>
    </div>
    </div>

        );
        
        }
    }
}

const mapStateToProps=state=>({
    leave:state.leave,
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchLeave3,onDeleteLeave,OnDissappear})(withRouter(Eleave));
