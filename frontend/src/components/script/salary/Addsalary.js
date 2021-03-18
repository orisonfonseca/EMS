import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {onAddSalary} from '../../Redux/salary/Salaryaction';
import {NavLink} from 'react-router-dom'
import { Spinner } from 'reactstrap';

class Addsalary extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            basic:"",
            allowance:"",
            netsal:"",
            id:props.match.params.id,
            errorbasic:"",
            errorrall:""
        };
    }
  
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:Number(e.target.value)});
       
    }

    handleValidation(){
        var errorbasic = "";
        var errorrall = "";        
        var formIsValid = true;

        if(!this.state.basic){
            formIsValid = false;
            errorbasic = "Cannot be empty";
         }
         
         if(!this.state.allowance){
            formIsValid = false;
            errorrall = "Cannot be empty";
         }
          
       this.setState({errorbasic:errorbasic,errorrall:errorrall});
       return formIsValid;
   }
    
    onSubmit=(e)=>{
        e.preventDefault();
        
        if(this.handleValidation()){
        var neti= Number(this.state.basic) + Number(this.state.allowance);
    
        setTimeout(() => {
            this.setState({netsal:neti},
            function(){
                const obj={
                    basic:this.state.basic,
                    allowance:this.state.allowance,
                    net:this.state.netsal,
                    id:this.state.id,
                }
               console.log(obj);
               this.props.onAddSalary(obj,this.props.history);
            });
        }, 10)
    }else{
        alert("Form has errors.")
     }
            //
            //this.setState({old_salary:"",revised_salary:"",date:"",id:""});
            
    }

    render() {
        const {basic,allowance}=this.state;
       
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
            <NavLink className="btn btn-dark mt-5" to={'/view-salary'}>Back</NavLink>

                <div className="row justify-content-center">
                    <div className="col-md-7 card p-4"> 
                   
                        <label>Add Salary</label>
                        <br></br>
                        
                        <div className="form-group">
                            <label>basic salary</label>
                            <input type="number" className="form-control" name="basic" value={basic} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorbasic}</span>

                        </div>
                        <div className="form-group">
                            <label>allowance </label>
                            <input type="number" className="form-control" name="allowance" value={allowance} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorrall}</span>

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
    salary:state.salary,
});
export default connect (mapStateToProps, {onAddSalary})(withRouter(Addsalary));