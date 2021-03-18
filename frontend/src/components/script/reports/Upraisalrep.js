import React, { Component } from 'react'
import {onFetchUpraisal2,onDeleteUpraisal,onUpdateUpraisal2,OnDissappear} from './../../Redux/upraisal/Upraisalaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';
import Modal from 'react-awesome-modal';

const customStyles = {

     
    content : { 
        border                : 'none',  
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        outline               : '0',
        opacity               :'1',
       
      }
      
    

};

class Upraisalrep extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             mod:false,
             id:"",
             old_salary:"",
             revised_salary:"",
             date:"",
             trek:"",
        }
    }
    componentDidMount=()=>{
        this.props.onFetchUpraisal2();
    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteUpraisal(id);
        if(res){
            this.props.onFetchUpraisal2();
        }
    }
    onmod1=(a,b,c,d)=>{
        const date = new Date(c),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        const ttt= [date.getFullYear(), mnth, day].join("-");

           this.setState({id:d,old_salary:a,revised_salary:b,date:ttt});
            this.setState({mod:!this.state.mod});
    }
    onmod2= async()=>{
        const obj={
            old_salary:this.state.old_salary,
            revised_salary:this.state.revised_salary,
            date:this.state.date,
            id:this.state.id,
        }
        
        
        const hist=this.props.history
        const res = await this.props.onUpdateUpraisal2(obj,this.state.trek,hist);
        if(res){
            this.props.onFetchUpraisal2();
            this.setState({mod:!this.state.mod});
        }
    }
    onmod3=()=>{
            this.setState({mod:!this.state.mod});
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }
    render() {
        const {upraisal}=this.props;
        const {success3,error3}=this.props.upraisal;
        if(this.props.upraisal.success3 || this.props.upraisal.error3){
            this.disappear();
        }
        if(upraisal.datastate3=="NOT_INITIALIZED" || upraisal.datastate3=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                     <Spinner color="primary" className="ml-5 mt-5" />
                </div>
            );
       }
        else {
        return (
<div class="content-wrapper">

        <div className="container-xxl  mt-5">
            <div className="container py-5 mr-5">
            

            <h1 className="text-center text-info sticky-top"> Upraisal Report</h1>
            {success3?<p className="alert alert-success">{success3}</p>:null}
            {error3?<p className="alert alert-danger">{error3}</p>:null}
            <div class="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                    <th>Image </th>
                    <th>Name </th>
                   <th>Old salary </th> 
                   <th>Revised salary </th>
                   <th>Date: </th>
                   <th>Action</th>

               </thead>
                <tbody>
                {upraisal.upraisal.map((el,index)=>(
                    <tr key={index}>
                        <td><img className="" height="100" width="100" src={`http://localhost:5000/${el.e_id.image}`}/></td>
                        <td>{el.e_id.name}</td>
                        <td>{el.old_salary}</td>
                        <td>{el.revised_salary}</td>
                        <td>{el.date}</td>
                        <td>
                        <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                        <button className="btn btn-info btn-sm" onClick={()=>this.onmod1(el.old_salary,el.revised_salary,el.date,el._id)}>Edit</button></p>
                        </td>
                   </tr>
                ))}
                </tbody>
            </table>
            </div>
            <Modal visible={this.state.mod} width="400" height="320" effect="fadeInUp" style={customStyles}  >
                            
                                
                            <div class="card mb-3">
                                        <h5 class="card-header bg-dark">Edit upraisal</h5>
                                        <div class="mx-5">
                                            <label>Old Salary</label>
                                                <input type="number" className="form-control" name="old_salary" value={this.state.old_salary} onChange={this.onHandleChange}></input>
                                                <label>Revised Salary</label>
                                                <input type="number" className="form-control" name="revised_salary" value={this.state.revised_salary} onChange={this.onHandleChange}></input>
                                                <label>Date</label>
                                                <input type="date" className="form-control" name="date" value={this.state.date} onChange={this.onHandleChange}></input>

                                            <a href="#" class="btn btn-primary" onClick={this.onmod2}>Save</a>
                                            <a href="#" class="btn btn-warning" onClick={this.onmod3}>Cancel</a>
                                        </div>
                                        </div>
                            
        </Modal>
    </div>
        
  </div>
</div>
        )}
    }
}
const mapStateToProps=state=>({
    upraisal:state.upraisal,
})
export default connect(mapStateToProps,{onFetchUpraisal2,onDeleteUpraisal,onUpdateUpraisal2,OnDissappear})(withRouter(Upraisalrep));
