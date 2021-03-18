import React, { Component } from 'react'
import {onFetchTimesheet2,onDeleteTimesheet,onUpdateTimesheet2,OnDissappear} from './../../Redux/timesheet/Timesheetaction';
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

class Timesheetrep extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             mod:false,
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
        }
    }
    componentDidMount=()=>{
        this.props.onFetchTimesheet2();
    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteTimesheet(id);
        if(res){
            this.props.onFetchTimesheet2();
        }
    }
    onmod1=(a,b,c,d,e,f,g,h,i)=>{
        this.setState({id:i,week:a,monday:b,tuesday:c,wednesday:d
            ,thursday:e,friday:f,saturday:g,sunday:h})
        this.setState({mod:!this.state.mod});
    }
    onmod2= async()=>{
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
        
        const hist=this.props.history
        const res = await this.props.onUpdateTimesheet2(obj,this.state.trek,hist);
        if(res){
            this.props.onFetchTimesheet2();
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
        const {week,monday,tuesday,wednesday,thursday,friday,saturday,sunday}=this.state;
        const {timesheet}=this.props;
        const {success4,error4}=this.props.timesheet;
        if(this.props.timesheet.success4 || this.props.timesheet.error4){
            this.disappear();
        }
        if(timesheet.datastate4=="NOT_INITIALIZED" || timesheet.datastate4=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                <Spinner color="primary" className="ml-5 mt-5" />
           </div>
            );
       }
        else {
        return (
            <div className="content-wrapper">

            <div className="container-xxl ">
            <div className="container py-5 mr-5 mt-5">
            

            <h1 className="text-center text-info sticky-top"> Timesheet Report</h1>
            {success4?<p className="alert alert-success">{success4}</p>:null}
            {error4?<p className="alert alert-danger">{error4}</p>:null}
            <table className="table table-responsive">
                <thead className="thead-dark">
                    <th>Image </th>
                    <th>Name </th>
                    <th>Week No.</th> 
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                    <th>Action</th>

               </thead>
                <tbody>
                {timesheet.timesheet.map((el,index)=>(
                    <tr key={index}>
                        <td><img className="" height="100" width="100" src={`http://localhost:5000/${el.e_id.image}`}/></td>
                        <td>{el.e_id.name}</td>
                        <td>{el.week}</td>
                        <td>{el.monday}</td>
                        <td>{el.tuesday}</td>
                        <td>{el.wednesday}</td>
                        <td>{el.thursday}</td>
                        <td>{el.friday}</td>
                        <td>{el.saturday}</td>
                        <td>{el.sunday}</td>
                        <td>
                        <button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                        <button className="btn btn-info btn-sm" 
                        onClick={()=>this.onmod1(el.week,el.monday,el.tuesday,el.wednesday,el.thursday,
                        el.friday,el.saturday,el.sunday,el._id)}>Edit</button>
                        </td>
                   </tr>
                ))}
                </tbody>
            </table>
            <Modal visible={this.state.mod} width="600" height="300" effect="fadeInUp" style={customStyles}  >
                   <div className="">         
                    <h5 class="card-header bg-dark">Featured</h5>
                    <form className="row g-3 mx-3">    
                    <div className="form-group col-xl-2">
                            <label>week no.</label>
                            <input type="text" className="form-control der" name="week" value={week} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group col-xl-2">
                            <label>monday</label>
                            <input type="text" className="form-control" name="monday" value={monday} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group col-xl-2">
                            <label>tuesday</label>
                            <input type="text" className="form-control" name="tuesday" value={tuesday} onChange={this.onHandleChange}/>
                        </div>
                     
                        <div className="form-group col-xl-2">
                            <label>wednesday</label>
                            <input type="text" className="form-control" name="wednesday" value={wednesday} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group col-xl-2">
                            <label>thursday</label>
                            <input type="text" className="form-control" name="thursday" value={thursday} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group col-xl-2">
                            <label>friday</label>
                            <input type="text" className="form-control" name="friday" value={friday} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group col-xl-2">
                            <label>saturday</label>
                            <input type="text" className="form-control" name="saturday" value={saturday} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group col-xl-2">
                            <label>sunday</label>
                            <input type="text" className="form-control" name="sunday" value={sunday} onChange={this.onHandleChange}/>
                        </div>
                        </form>
                        <a href="#" class="btn btn-primary ml-4" onClick={this.onmod2}>Save</a>
                        <a href="#" class="btn btn-warning " onClick={this.onmod3}>cancel</a>
                        </div>    
                            
        </Modal>
        </div>
        
        </div>
    </div>

        )}
    }
}
const mapStateToProps=state=>({
    timesheet:state.timesheet,
})
export default connect(mapStateToProps,{onFetchTimesheet2,onDeleteTimesheet,onUpdateTimesheet2,OnDissappear})(withRouter(Timesheetrep));
