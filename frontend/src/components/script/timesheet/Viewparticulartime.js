import React, { Component } from 'react';
import {onFetchTimesheet, onDeleteTimesheet,OnDissappear} from './../../Redux/timesheet/Timesheetaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';


class Viewparticulartime extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
        }
    }

    
    componentDidMount=()=>{
        this.props.onFetchTimesheet(this.props.match.params.id);

    }
    onDelete=async(id)=>{
        //console.log(id);
      const res= await this.props.onDeleteTimesheet(id);
        if(res){
            this.props.onFetchTimesheet(this.props.match.params.id);
        }
    }
    disappear=()=>{
        this.props.OnDissappear();
        
    }

    render() {
        const {timesheet}=this.props;
        console.log(this.props);
        const { search } = this.state;
        const {success4,error4}=this.props.timesheet;
        console.log(this.props)
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
        <div class="content-wrapper mt-5">

        <div className="container py-5 mr-5">
                <NavLink className="btn btn-dark" to={'/view-timesheet'}>Back</NavLink>

                <h1 className="text-center text-info sticky-top"> Timesheet Hours</h1>
                {success4?<p className="alert alert-success">{success4}</p>:null}
                {error4?<p className="alert alert-danger">{error4}</p>:null}
                <table className="table">
                    <thead className="thead-dark">
                       <th>Week No.</th> 
                       <th>Monday hrs</th>
                       <th>Tuesday hrs</th>
                       <th>Wednesday hrs</th>
                       <th>Thursday hrs</th>
                       <th>Friday hrs</th>
                       <th>Saturday hrs</th>
                       <th>Sunday hrs</th>
                       <th>Action</th>

                   </thead>
                    <tbody>
                    {timesheet.timesheet.map((el,index)=>(
                        <tr key={index}>
                            <td>{el.week}</td>
                            <td>{el.monday}</td>
                            <td>{el.tuesday}</td>
                            <td>{el.wednesday}</td>
                            <td>{el.thursday}</td>
                            <td>{el.friday}</td>
                            <td>{el.saturday}</td>
                            <td>{el.sunday}</td>
                            <td>
                            <p><button className="btn btn-danger btn-sm" onClick={()=>this.onDelete(el._id)}>Delete</button>
                             <NavLink className="btn btn-info btn-sm" to={`edit-timesheet/${el._id}`}>Edit</NavLink></p>
                            </td>
                       </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>

        );
        
        }
    }
}

const mapStateToProps=state=>({
    timesheet:state.timesheet,
})

export default connect(mapStateToProps,{onFetchTimesheet, onDeleteTimesheet,OnDissappear})(withRouter(Viewparticulartime));
