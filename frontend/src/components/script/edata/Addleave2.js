import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddLeave2} from '../../Redux/leave/Leaveaction';
import {NavLink} from 'react-router-dom'
import { Spinner } from 'reactstrap';

class AddLeave2 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            from:"",
            to:"",
            reason:"",
            description:"",
            status:"pending",
            id:props.match.params.id,
        };
    }
  
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    
    onSubmit=(e)=>{
        
        const obj={
            from:this.state.from,
            to:this.state.to,
            reason:this.state.reason,
            description:this.state.description,
            status:this.state.status,
            id:this.state.id,
        }
        console.log(obj);
            this.props.onAddLeave2(obj,this.props.history);            
    }

    render() {
        const {from,to,reason,description,status}=this.state;
   
        return (
            <div className="content-wrapper mt-5">
            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={'/eleave'}>Back</NavLink>

                <div className="row justify-content-center ">

                    <div className="col-md-7 card p-4 "> 
                   
                        <label>Add Leave</label>
                        <br></br>
                        <div className="form-group">
                            <label>From</label>
                            <input type="date" className="form-control" name="from" value={from} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input type="date" className="form-control" name="to" value={to} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Reason</label>
                            <input type="text" className="form-control" name="reason" value={reason} onChange={this.onHandleChange}/>
                        </div>
                     
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" name="description" value={description} onChange={this.onHandleChange}/>
                        </div>
                       
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            </div>
        )
         
    }
}
const mapStateToProps=state=>({
    leave:state.leave,
});
export default connect (mapStateToProps, {onAddLeave2})(withRouter(AddLeave2));