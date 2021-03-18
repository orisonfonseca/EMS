import React, { Component } from 'react';
import {onUpdateSalary, getSingleSalary} from './../../Redux/salary/Salaryaction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Editsalary extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            id:"",
            basic:"",
            allowance:"",
            netsal:"",
            trek:"",
            errorbasic:"",
            errorrall:""
        }
        const id=props.match.params.id;
        this.getSingleSalary1(id);
        
    }

    getSingleSalary1=async (id)=>{
       const res= await this.props.getSingleSalary(id);
      console.log(this.props.history);
       if(res){
           this.setState({id:res._id,basic:res.basic,allowance:res.allowance,netsal:res.netsal,trek:res.e_id})
       }
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
        //console.log(this.state);
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
               const hist=this.props.history

               this.props.onUpdateSalary(obj,this.state.trek,hist);
            });
        }, 10)
    }else{
        alert("Form has errors.")
     }
    }

    render() {
        const {basic,allowance,trek}=this.state;
        return (
            <div className="content-wrapper">

            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-7 card p-4 mt-5"> 
                        <h1 className="sticky-top">Edit Salary</h1>
                        <div className="form-group">
                            <label>basic salary</label>
                            <input type="number" className="form-control" name="basic" value={basic} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorbasic}</span>
                        </div>
                        <div className="form-group">
                            <label>allowance salary</label>
                            <input type="number" className="form-control" name="allowance" value={allowance} onChange={this.onHandleChange}/>
                            <span style={{color: "red"}}>{this.state.errorrall}</span>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            <NavLink className="btn btn-warning" to={"/view-partsalary/"+trek}>cancel</NavLink>

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

export default connect (mapStateToProps, {onUpdateSalary, getSingleSalary})(withRouter(Editsalary));