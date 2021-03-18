import React, { Component } from 'react';
import {onFetchTimesheet3} from './../../Redux/timesheet/Timesheetaction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Etimesheet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:"",
             id:this.props.eauth.emp.id
        }
    }
    
    componentDidMount(){
        //this.props.onFetchTimesheet3(this.state.id);
    }

    render() {
        const {timesheet}=this.props;

    console.log(timesheet);
        const {success4,error4}=this.props.timesheet;

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

        <div className="container py-5 mr-5">

                <h1 className="text-center text-info sticky-top mt-5"> Timesheet Hours</h1>
                {success4?<p className="text-success">{success4}</p>:null}
                {error4?<p className="text-danger">{error4}</p>:null}
                <table className="table table-responsive">
                    <thead className="thead-dark">
                       <th>Week No.</th> 
                       <th>Monday hrs</th>
                       <th>Tuesday hrs</th>
                       <th>Wednesday hrs</th>
                       <th>Thursday hrs</th>
                       <th>Friday hrs</th>
                       <th>Saturday hrs</th>
                       <th>Sunday hrs</th>

                   </thead>
                    <tbody>
                    {timesheet.timesheet.map((el,index)=>(
                        <tr key={el.week}>
                            <td>{el.week}</td>
                            <td>{el.monday}</td>
                            <td>{el.tuesday}</td>
                            <td>{el.wednesday}</td>
                            <td>{el.thursday}</td>
                            <td>{el.friday}</td>
                            <td>{el.saturday}</td>
                            <td>{el.sunday}</td>
                            
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
    eauth:state.eauth
})

export default connect(mapStateToProps,{onFetchTimesheet3})(withRouter(Etimesheet));
