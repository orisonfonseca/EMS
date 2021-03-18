import React, { Component } from 'react';
import {onUpdateTimesheet, getSingleTimesheet} from './../../Redux/timesheet/Timesheetaction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Edittimesheet extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            week:"",
            monday:"",
            tuesday:"",
            wednesday:"",
            thursday:"",
            friday:"",
            saturday:"",
            sunday:"",
            trek:"",
            ew:"",
            em:"",
            et:"",
            ew:"",
            eth:"",
            ef:"",
            est:"",
            es:""
        }
        const id=props.match.params.id;
        this.getSingleTimesheet1(id);
        
    }

    getSingleTimesheet1=async (id)=>{
       const res= await this.props.getSingleTimesheet(id);
      console.log(res);
       if(res){
           this.setState({id:res._id,week:res.week,monday:res.monday,tuesday:res.tuesday,trek:res.e_id,wednesday:res.wednesday
            ,thursday:res.thursday,friday:res.friday,saturday:res.saturday,sunday:res.sunday})
       }
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
        //console.log(this.state);
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
        const hist=this.props.history
        this.props.onUpdateTimesheet(obj,this.state.trek,hist);
    }else{
        alert("Form has errors.")
     }  
    }

    render() {
        const {week,monday,tuesday,wednesday,thursday,friday,saturday,sunday,trek}=this.state;
        
        return (
            <div class="content-wrapper">

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 card p-4 mt-5"> 
                        <h1 className="sticky-top">Edit Timesheet</h1>
                        <div className="form-group">
                            <label>week no.</label>
                            <input type="text" className="form-control" name="week" value={week} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ew}</span>

                        </div>
                        <div className="form-group">
                            <label>monday</label>
                            <input type="text" className="form-control" name="monday" value={monday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.em}</span>

                        </div>
                        <div className="form-group">
                            <label>tuesday</label>
                            <input type="text" className="form-control" name="tuesday" value={tuesday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.et}</span>

                        </div>
                     
                        <div className="form-group">
                            <label>wednesday</label>
                            <input type="text" className="form-control" name="wednesday" value={wednesday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ewd}</span>

                        </div>
                        </div>
                        <div className="col-md-5 ml-3 card p-4 mt-5"> 
                        <div className="form-group">
                            <label>thursday</label>
                            <input type="text" className="form-control" name="thursday" value={thursday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.eth}</span>

                        </div>
                        <div className="form-group">
                            <label>friday</label>
                            <input type="text" className="form-control" name="friday" value={friday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.ef}</span>

                        </div>
                        <div className="form-group">
                            <label>saturday</label>
                            <input type="text" className="form-control" name="saturday" value={saturday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.est}</span>

                        </div>
                        <div className="form-group">
                            <label>sunday</label>
                            <input type="text" className="form-control" name="sunday" value={sunday} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.es}</span>

                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            <NavLink className="btn btn-warning" to={"/view-particulartimesheet/"+trek}>cancel</NavLink>

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

export default connect (mapStateToProps, {onUpdateTimesheet, getSingleTimesheet})(withRouter(Edittimesheet));