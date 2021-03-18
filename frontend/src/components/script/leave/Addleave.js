import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onAddLeave} from '../../Redux/leave/Leaveaction';
import {withRouter,NavLink} from 'react-router-dom';

import { Spinner } from 'reactstrap';

class AddLeave extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            from:"",
            to:"",
            reason:"",
            description:"",
            status:"",
            id:props.match.params.id,
            ed1:"",
            ed2:"",
            er:"",
            ed:"",
            es:""
        };
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
            this.props.onAddLeave(obj,this.props.history);            
    }else{
        alert("Form has errors.")
     }}

    render() {
        const {from,to,reason,description,status}=this.state;
        //const {success3,error3}=this.props.upraisal;
        //const upraisal=this.props.upraisal;
        
        
        return (
            <div className="content-wrapper">

            <div className="container mt-4">
            <NavLink className="btn btn-dark mt-5" to={'/view-leave'}>Back</NavLink>

                <div className="row justify-content-center">   

                    <div className="col-md-7 card p-4"> 
                   
                        <label>Add Leave</label>
                        <br></br>
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
                            <label>Status</label>
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
export default connect (mapStateToProps, {onAddLeave})(withRouter(AddLeave));