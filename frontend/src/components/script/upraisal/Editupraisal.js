import React, { Component } from 'react';
import {onUpdateUpraisal, getSingleUpraisal} from './../../Redux/upraisal/Upraisalaction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Editupraisal extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            old_salary:"",
            revised_salary:"",
            date:"",
            trek:"",
            errorold:"",
            errorrev:"",
            errordate:""
           
        }
        const id=props.match.params.id;
        this.getSingleUpraisal1(id);
        
    }

    getSingleUpraisal1=async (id)=>{
       const res= await this.props.getSingleUpraisal(id);
      console.log(res);
       if(res){
        const date = new Date(res.date),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        const ttt= [date.getFullYear(), mnth, day].join("-");

           this.setState({id:res._id,old_salary:res.old_salary,revised_salary:res.revised_salary,date:ttt,trek:res.e_id})
       }
    }
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }

    handleValidation(){
        var errorold = "";
        var errorrev = "";
        var errordate="";
        

        var formIsValid = true;

        if(!this.state.old_salary){
            formIsValid = false;
            errorold = "Cannot be empty";
         }
         
         if(!this.state.revised_salary){
            formIsValid = false;
            errorrev = "Cannot be empty";
         }
         if(!this.state.date){
            formIsValid = false;
            errordate = "Please select date";
         }
         
     
          
       this.setState({errorold:errorold,errorrev:errorrev,errordate:errordate});
       return formIsValid;
   }

    onSubmit=(e)=>{
        //console.log(this.state);
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            old_salary:this.state.old_salary,
            revised_salary:this.state.revised_salary,
            date:this.state.date,
            id:this.state.id,
        }
        console.log(obj);
        const hist=this.props.history
        this.props.onUpdateUpraisal(obj,this.state.trek,hist);
    }else{
        alert("Form has errors.")
     }
}

    render() {
        const {old_salary,revised_salary,date,trek}=this.state;
        
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4 mt-5"> 
                        <h1 className="sticky-top">Edit Upraisal</h1>
                        <div className="form-group">
                            <label>Old Salary</label>
                            <input type="number" className="form-control" name="old_salary" value={old_salary} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorold}</span>
                        </div>
                        <div className="form-group">
                            <label>Revised Salary</label>
                            <input type="number" className="form-control" name="revised_salary" 
                            value={revised_salary} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorrev}</span>

                        </div>
                        <div className="form-group">
                            <label>date</label>
                            <input type="date" className="form-control" name="date" value={date} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errordate}</span>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            <NavLink className="btn btn-warning" to={"/view-particular/"+trek}>cancel</NavLink>

			            </div>
                        
                    </div>
                </div>
            </div>
            </div>

        )
    }
}
const mapStateToProps=state=>({
    upraisal:state.upraisal,
    
});

export default connect (mapStateToProps, {onUpdateUpraisal, getSingleUpraisal})(withRouter(Editupraisal));