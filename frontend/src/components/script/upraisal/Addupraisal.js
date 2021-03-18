import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddUpraisal} from '../../Redux/upraisal/Upraisalaction';
import {NavLink} from 'react-router-dom'
import { Spinner } from 'reactstrap';

class Addupraisal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            old_salary:"",
            revised_salary:"",
            date:"",
            id:props.match.params.id,
            errorold:"",
            errorrev:"",
            errordate:""

        };
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
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            old_salary:this.state.old_salary,
            revised_salary:this.state.revised_salary,
            date:this.state.date,
            id:this.state.id,
        }
        console.log(obj);
            this.props.onAddUpraisal(obj,this.props.history);
            this.setState({old_salary:"",revised_salary:"",date:"",id:""});
    }else{
        alert("Form has errors.")
     }
    }

    render() {
        const {old_salary,revised_salary,date}=this.state;
        //const {success3,error3}=this.props.upraisal;
        //const upraisal=this.props.upraisal;
        
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={'/view-upraisal'}>Back</NavLink>

                <div className="row justify-content-center ">
                    <div className="col-md-7 card p-4"> 
                   
                        <label>Add Upraisal</label>
                        <br></br>
                        
                        
                        <div className="form-group">
                            <label>Old salary</label>
                            <input type="number" className="form-control" name="old_salary" value={old_salary} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorold}</span>

                        </div>
                        <div className="form-group">
                            <label>Revised salary</label>
                            <input type="number" className="form-control" name="revised_salary" value={revised_salary} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorrev}</span>
                        </div>
                     
                        <div className="form-group">
                            <label>date</label>
                            <input type="date" className="form-control" name="date" value={date} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errordate}</span>
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
    upraisal:state.upraisal,
});
export default connect (mapStateToProps, {onAddUpraisal})(withRouter(Addupraisal));