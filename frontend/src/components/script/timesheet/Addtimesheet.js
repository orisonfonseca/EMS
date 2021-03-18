import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddTimesheet} from '../../Redux/timesheet/Timesheetaction';
import {NavLink} from 'react-router-dom'
import { Spinner } from 'reactstrap';

class Addtimesheet extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            week:"",
            monday:"",
            tuesday:"",
            wednesday:"",
            thursday:"",
            friday:"",
            saturday:"",
            sunday:"",
            id:props.match.params.id,
            ew:"",
            em:"",
            et:"",
            ew:"",
            eth:"",
            ef:"",
            est:"",
            es:""
        };
    }
  
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleValidation(){
        var ew="";
        var em="";
        var et="";
        var ewd="";
        var eth="";
        var ef="";
        var est="";
        var es="" ;
        
        

        var formIsValid = true;

        if(!this.state.week){
            formIsValid = false;
            ew = "Cannot be empty";
         }
         
         if(!this.state.monday){
            formIsValid = false;
            em = "Cannot be empty";
         }
         if(!this.state.tuesday){
            formIsValid = false;
            et = "Cannot be empty";
         }
         if(!this.state.wednesday){
            formIsValid = false;
            ewd = "Cannot be empty";
         }
         if(!this.state.thursday){
            formIsValid = false;
            eth = "Cannot be empty";
         }
         if(!this.state.friday){
            formIsValid = false;
            ef = "Cannot be empty";
         }
         if(!this.state.saturday){
            formIsValid = false;
            est = "Cannot be empty";
         }
         if(!this.state.sunday){
            formIsValid = false;
            es = "Cannot be empty";
         }
         
     
          
       this.setState({ew:ew,em:em,et:et,ewd:ewd,eth:eth,et:et,ef:ef,est:est,es:es});
       return formIsValid;
   }
    
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        const obj={
            week:this.state.week,
            monday:this.state.monday,
            tuesday:this.state.tuesday,
            wednesday:this.state.wednesday,
            thursday:this.state.thursday,
            friday:this.state.friday,
            saturday:this.state.saturday,
            sunday:this.state.sunday,
            id:this.state.id,
        }
        console.log(obj);
            this.props.onAddTimesheet(obj,this.props.history);
            //this.setState({week:"",monday:"",tuesday:"",wednesday:"",thursday:"",friday:"",saturday:"",sunday:"",id:""});
    }else{
        alert("Form has errors.")
     }   
    }

    render() {
        const {week,monday,tuesday,wednesday,thursday,friday,saturday,sunday}=this.state;
        //const {success3,error3}=this.props.upraisal;
        //const upraisal=this.props.upraisal;
        
        
        return (
            <div class="content-wrapper">

            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={'/view-timesheet'}>Back</NavLink>

                <div className="row justify-content-center">
                    <div className="col-md-5 card p-4 "> 
                   
                        <label>Add Timesheet Hours</label>
                        <br></br>
                        <div className="form-group">
                            <label>week no.</label>
                            <input type="number" className="form-control" name="week" value={week} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ew}</span>

                        </div>
                        <div className="form-group">
                            <label>monday</label>
                            <input type="number" className="form-control" name="monday" value={monday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.em}</span>

                        </div>
                        <div className="form-group">
                            <label>tuesday</label>
                            <input type="number" className="form-control" name="tuesday" value={tuesday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.et}</span>

                        </div>
                     
                        <div className="form-group">
                            <label>wednesday</label>
                            <input type="number" className="form-control" name="wednesday" value={wednesday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ewd}</span>

                        </div>
                        </div>
                        <div className="col-md-5 ml-3 card p-4 "> 

                        <div className="form-group">
                            <label>thursday</label>
                            <input type="number" className="form-control" name="thursday" value={thursday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.eth}</span>

                        </div>
                        <div className="form-group">
                            <label>friday</label>
                            <input type="number" className="form-control" name="friday" value={friday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ef}</span>

                        </div>
                        <div className="form-group">
                            <label>saturday</label>
                            <input type="number" className="form-control" name="saturday" value={saturday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.est}</span>

                        </div>
                        <div className="form-group">
                            <label>sunday</label>
                            <input type="number" className="form-control" name="sunday" value={sunday} onChange={this.onHandleChange}/>
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
    timesheet:state.timesheet,
});
export default connect (mapStateToProps, {onAddTimesheet})(withRouter(Addtimesheet));