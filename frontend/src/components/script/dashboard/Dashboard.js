import React, { Component } from 'react'
import {onFetchUpraisal2} from './../../Redux/upraisal/Upraisalaction';
import {onFetchTimesheet2} from './../../Redux/timesheet/Timesheetaction';
import {onFetchSalary2} from './../../Redux/salary/Salaryaction';
import {onFetchEmployee} from './../../Redux/employee/Employeeaction';
import {onFetchLeave23} from './../../Redux/leave/Leaveaction';
import {onFetchDepartment} from './../../Redux/department/Departmentaction';
import {onFetchRole} from './../../Redux/role/Roleaction';
import {onFetchProject} from './../../Redux/project/Projectaction';

import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';

class Dashboard extends Component {
  
  componentDidMount=()=>{
    this.props.onFetchUpraisal2();
    this.props.onFetchTimesheet2();
    this.props.onFetchSalary2();
    this.props.onFetchEmployee();
    this.props.onFetchLeave23();
    this.props.onFetchDepartment();
    this.props.onFetchRole();
    this.props.onFetchProject();

}
    render() {
      const {upraisal}=this.props;
      const {timesheet}=this.props;
      const {salary}=this.props;
      const {employees}=this.props;
      const {leave}=this.props;
      const {department}=this.props;
      const {role}=this.props;
      const {project}=this.props;

        if(upraisal.datastate3=="NOT_INITIALIZED" || upraisal.datastate3=="FETCHING" || 
           timesheet.datastate4=="NOT_INITIALIZED" || timesheet.datastate4=="FETCHING" ||
           salary.datastate5=="NOT_INITIALIZED" || salary.datastate5=="FETCHING" ||
           employees.datastate=="NOT_INITIALIZED" || employees.datastate=="FETCHING" ||
           leave.datastate6=="NOT_INITIALIZED" || leave.datastate6=="FETCHING" || 
           department.datastate9=="NOT_INITIALIZED" || department.datastate9=="FETCHING" ||
           role.datastate8=="NOT_INITIALIZED" || role.datastate8=="FETCHING" ||
           project.datastate7=="NOT_INITIALIZED" || project.datastate7=="FETCHING"){
            return (
              <div className="content-wrapper mt-5">
              <Spinner color="primary" className="ml-5 mt-5" />
         </div>
            );
       }
        else {
        return (
                <div className="content-wrapper mt-5">
                    <section className="content mt-5">
                  <div className="container-fluid ">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-info">
                          <div className="inner">
                            <h3>{employees.employees.length}</h3>
                            <p>Employees</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-user" />
                          </div>
                          <NavLink className="small-box-footer" to="/view-employee" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-success">
                          <div className="inner">
                            <h3>{upraisal.upraisal.length}<sup style={{fontSize: 20}}></sup></h3>
                            <p>Upraisal</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-angle-double-up" />
                          </div>
                          <NavLink className="small-box-footer" to="/upraisalrep" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-warning">
                          <div className="inner">
                            <h3>{timesheet.timesheet.length}</h3>
                            <p>Timesheet</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-check-square" />
                          </div>
                          <NavLink className="small-box-footer" to="/timesheetrep" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-danger">
                          <div className="inner">
                            <h3>{salary.salary.length}</h3>
                            <p>Salary</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-credit-card" />
                          </div>
                          <NavLink className="small-box-footer" to="/salaryrep" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-pink lighten-4">
                          <div className="inner">
                            <h3>{leave.leave.length}</h3>
                            <p>Leave Request's</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-anchor" />
                          </div>
                          <NavLink className="small-box-footer" to="/leaverep" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-teal accent-2">
                          <div className="inner">
                            <h3>{department.department.length}</h3>
                            <p>Departments</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-id-card" />
                          </div>
                          <NavLink className="small-box-footer" to="/view-department" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-blue lighten-4">
                          <div className="inner">
                            <h3>{role.role.length}</h3>
                            <p>Role</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-users" />
                          </div>
                          <NavLink className="small-box-footer" to="/view-role" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mt-5">
                        {/* small box */}
                        <div className="small-box bg-purple">
                          <div className="inner">
                            <h3>{project.project.length}</h3>
                            <p>Project</p>
                          </div>
                          <div className="icon">
                            <i className="fas fa-tasks" />
                          </div>
                          <NavLink className="small-box-footer" to="/view-project" > More info 
                          <i className="fas fa-arrow-circle-right" /></NavLink>
                        </div>
                      </div>
                      {/* ./col */}
                    </div>
                  </div></section>

                            </div>
        )
        }
    }
}
const mapStateToProps=state=>({
  upraisal:state.upraisal,
  timesheet:state.timesheet,
  salary:state.salary,
  employees:state.employees,
  leave:state.leave,
  department:state.department,
  role:state.role,
  project:state.project
})
export default connect(mapStateToProps,{onFetchUpraisal2,onFetchTimesheet2,onFetchSalary2,onFetchEmployee,
  onFetchLeave23,onFetchDepartment,onFetchRole,onFetchProject})(withRouter(Dashboard));