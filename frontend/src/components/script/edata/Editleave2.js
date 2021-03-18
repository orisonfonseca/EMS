import React, { Component } from 'react';
import {onUpdateLeave3, getSingleLeave} from './../../Redux/leave/Leaveaction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'

class Editleave2 extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            from:"",
            to:"",
            reason:"",
            description:"",
            status:"",
            trek:"",
        }
        const id=props.match.params.id;
        this.getSingleLeave1(id);
        
    }

    getSingleLeave1=async (id)=>{
       const res= await this.props.getSingleLeave(id);
      
       if(res){
        const date = new Date(res.from),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        const ttt= [date.getFullYear(), mnth, day].join("-");

        const date1 = new Date(res.to),
        mnth1 = ("0" + (date1.getMonth() + 1)).slice(-2),
        day1 = ("0" + date1.getDate()).slice(-2);
        const tt= [date1.getFullYear(), mnth1, day1].join("-");
           this.setState({id:res._id,from:ttt,to:tt,reason:res.reason,
            description:res.description,status:res.status,trek:res.e_id})
       }
    }
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }

    onSubmit=()=>{
        
        const obj={
            from:this.state.from,
            to:this.state.to,
            reason:this.state.reason,
            description:this.state.description,
            status:this.state.status,
            id:this.state.id,
        }
       console.log(obj);
       const hist=this.props.history

       this.props.onUpdateLeave3(obj,hist);
    
       
    }

    render() {
        const {from,to,reason,description,status}=this.state;
        
        return (
            <div className="content-wrapper mt-5">

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4 mt-5"> 
                        <h1 className="sticky-top">Edit Leave</h1>
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
                            <NavLink className="btn btn-warning" to={'/eleave'}>cancel</NavLink>

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

export default connect (mapStateToProps, {onUpdateLeave3, getSingleLeave})(withRouter(Editleave2));