import React, { Component } from 'react';
import {onUpdateLeave, getSingleLeave} from './../../Redux/leave/Leaveaction';
import {withRouter,NavLink} from 'react-router-dom'; 
import {connect} from 'react-redux';

class Editleave extends Component {
   
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
            ed1:"",
            ed2:"",
            er:"",
            ed:"",
            es:""
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

    handleValidation(){
        var ed1 = "";
        var ed2 = "";
        var er="";
        var ed="";
        var es="";

        var formIsValid = true;

        if(!this.state.from){
            formIsValid = false;
            ed1 = "Cannot be empty";
         }
         
         if(!this.state.to){
            formIsValid = false;
            ed2 = "Cannot be empty";
         }
         if(!this.state.reason){
            formIsValid = false;
            er = "Cannot be empty";
         }
         if(!this.state.description){
            formIsValid = false;
            ed = "Cannot be empty";
         }
         if(!this.state.status){
            formIsValid = false;
            es = "Please select status";
         }
          
       this.setState({ed1:ed1,ed2:ed2,er:er,ed:ed,es:es});
       return formIsValid;
   }

    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){ 
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

       this.props.onUpdateLeave(obj,this.state.trek,hist);
        }else{
            alert("Form has errors.")
         }
       
    }

    render() {
        const {from,to,reason,description,status,trek}=this.state;
        
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-7 card p-4 mt-5"> 
                        <h1 className="sticky-top">Edit Leave</h1>
                        <div className="form-group">
                            <label>From</label>
                            <input type="date" className="form-control" name="from" value={from} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ed1}</span>

                        </div>
                        <div className="form-group">
                            <label>To</label>
                            <input type="date" className="form-control" name="to" value={to} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ed2}</span>

                        </div>
                        <div className="form-group">
                            <label>Reason</label>
                            <input type="text" className="form-control" name="reason" value={reason} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.er}</span>

                        </div>
                     
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" name="description" value={description} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ed}</span>

                        </div>
                        <div className="form-group">
                            <label>Statuse</label>
                            <select className="form-control" value={status} name="status" onChange={this.onHandleChange}>
                                <option className="form-control" >Select Option</option>
                                <option className="form-control" value="Pending">Pending</option>
                                <option className="form-control" value="Approved">Approved</option>
                                <option className="form-control" value="Rejected">Rejected</option>
                            </select> 
                            <span style={{color: "red"}}>{this.state.es}</span>                       
                            </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            <NavLink className="btn btn-warning" to={"/view-partleave/"+trek}>cancel</NavLink>

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

export default connect (mapStateToProps, {onUpdateLeave, getSingleLeave})(withRouter(Editleave));