import React, { Component } from 'react';
import {onFetchLeave, onDeleteLeave,OnDissappear} from './../../Redux/leave/Leaveaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';


class Viewpartleave extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }

    
    componentDidMount=()=>{
        this.props.onFetchLeave(this.props.match.params.id);

    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteLeave(id);
        if(res){
            this.props.onFetchLeave(this.props.match.params.id);
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }

    render() {
        const {leave}=this.props;
        
        const { search } = this.state;
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
        <div className="content-wrapper mt-5">

        <div className="container py-5 mr-5">
                <NavLink className="btn btn-dark" to={'/view-leave'}>Back</NavLink>

                <h1 className="text-center text-info sticky-top"> Leave Application's</h1>
                {success6?<p className="alert alert-success">{success6}</p>:null}
                {error6?<p className="alert alert-danger">{error6}</p>:null}
                <table className="table">
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
                             <NavLink className="btn btn-info btn-sm" to={`edit-leave/${el._id}`}>Edit</NavLink></p>
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
})

export default connect(mapStateToProps,{onFetchLeave, onDeleteLeave,OnDissappear})(withRouter(Viewpartleave));
