import React, { Component } from 'react'
import {onFetchLeave2,onDeleteLeave,onUpdateLeave2,OnDissappear} from './../../Redux/leave/Leaveaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';
import Modal from 'react-awesome-modal';

const customStyles = {

     
    content : { 
        border                : 'none',  
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        outline               : '0',
        opacity               :'1',
       
      }
      
    

};

class Leaverep extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             mod:false,
             id:"",
             from:"",
             to:"",
             reason:"",
             description:"",
             status:"",
             trek:"",
        }
    }
    componentDidMount=()=>{
        this.props.onFetchLeave2();
    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteLeave(id);
        if(res){
            this.props.onFetchLeave2();
        }
    }
    onmod1=(a,b,c,d,e,f)=>{
        const date = new Date(a),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        const ttt= [date.getFullYear(), mnth, day].join("-");

        const date1 = new Date(b),
        mnth1 = ("0" + (date1.getMonth() + 1)).slice(-2),
        day1 = ("0" + date1.getDate()).slice(-2);
        const tt= [date1.getFullYear(), mnth1, day1].join("-");

        this.setState({id:f,from:ttt,to:tt,reason:c,description:d,status:e})
        this.setState({mod:!this.state.mod});
    }
    onmod2= async()=>{
        const obj={
            from:this.state.from,
            to:this.state.to,
            reason:this.state.reason,
            description:this.state.description,
            status:this.state.status,
            id:this.state.id,
        }
        
        const hist=this.props.history
        const res = await this.props.onUpdateLeave2(obj,this.state.trek,hist);
        if(res){
            this.props.onFetchLeave2();
            this.setState({mod:!this.state.mod});
        }
    }
    onmod3=()=>{
        this.setState({mod:!this.state.mod});
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {from,to,reason,description,status}=this.state;
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
            <div className="container-xxl ">
            <div className="container py-5 mr-5 mt-5">
            

            <h1 className="text-center text-info sticky-top"> Leave Report</h1>
            {success6?<p className="alert alert-success">{success6}</p>:null}
            {error6?<p className="alert alert-danger">{error6}</p>:null}
            <table className="table table-responsive">
                <thead className="thead-dark">
                    <th>Image </th>
                    <th>Name </th>
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
                        <td><img className="" height="100" width="100" src={`http://localhost:5000/${el.e_id.image}`}/></td>
                        <td>{el.e_id.name}</td>
                        <td>{el.from.slice(0,-14)}</td>
                        <td>{el.to.slice(0,-14)}</td>
                        <td>{el.reason}</td>
                        <td>{el.description}</td>
                        <td>{el.status}</td>
                        <td>
                        <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                        <button className="btn btn-info btn-sm" 
                        onClick={()=>this.onmod1(el.from,el.to,el.reason,el.description,el.status,el._id)}>Edit</button></p>
                        </td>
                   </tr>
                ))}
                </tbody>
            </table>
            <Modal visible={this.state.mod} width="450" height="500" effect="fadeInUp" style={customStyles}  >
                   <div className="card">         
                    <h5 class="card-header bg-cyan accent-3">Edit Leave</h5>
                    <div className="mx-5 mb-3">     
                    <div className="form-group">
                            <label className="text-dark">From</label>
                            <input type="date" className="form-control" name="from" value={from} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">To</label>
                            <input type="date" className="form-control" name="to" value={to} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Reason</label>
                            <input type="text" className="form-control" name="reason" value={reason} onChange={this.onHandleChange}/>
                        </div>
                     
                        <div className="form-group">
                            <label className="text-dark">Description</label>
                            <input type="text" className="form-control" name="description" value={description} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Status</label>
                            <select className="form-control" value={status} name="status" onChange={this.onHandleChange}>
                                <option className="form-control" >Select Option</option>
                                <option className="form-control" value="Pending">Pending</option>
                                <option className="form-control" value="Approved">Approved</option>
                                <option className="form-control" value="Rejected">Rejected</option>
                            </select>                        
                            </div>
                            <a href="#" class="btn btn-primary" onClick={this.onmod2}>Save</a>
                            <a href="#" class="btn btn-warning" onClick={this.onmod3}>Cancel</a>
                            </div>
                        </div>    
                            
        </Modal>
        </div>
        
        </div>
        </div>
        )}
    }
}
const mapStateToProps=state=>({
    leave:state.leave,
})
export default connect(mapStateToProps,{onFetchLeave2,onDeleteLeave,onUpdateLeave2,OnDissappear})(withRouter(Leaverep));
