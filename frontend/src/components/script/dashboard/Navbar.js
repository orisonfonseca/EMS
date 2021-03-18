import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink,Link } from 'react-router-dom';
import { SidebarData,SidebarData2,subNav } from './SidebarData';
import './Navbar.css';
import { IconContext, } from 'react-icons';
import { FaBorderAll, } from "react-icons/fa";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { BsPerson } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import {onLogout} from '../../Redux/auth/Authaction';
import {onLogout2} from '../../Redux/eauth/Eauthaction';
import {NavItem} from 'reactstrap';
import {onFetchUpraisal3} from './../../Redux/upraisal/Upraisalaction';
import {onFetchTimesheet3} from './../../Redux/timesheet/Timesheetaction';
import {onFetchSalary3} from './../../Redux/salary/Salaryaction';
import {onFetchProject} from './../../Redux/project/Projectaction';
import {onFetchRole} from './../../Redux/role/Roleaction';
import {onFetchnoti,onFetchnoti2,onFetchnoti3,onFetchnoti4,onFetchnoti5,onFetchnoti6} from './../../Redux/noti/Notiaction';
import { Spinner,Search } from 'reactstrap';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(true);
  const [upraisal, setupraisal] = useState();
  const [timesheet, settimesheet] = useState();
  const [salary, setsalary] = useState();
  const [project, setproject] = useState();
  const [role, setrole] = useState();

  const showSidebar = () => setSidebar(!sidebar);

 const logout=()=>{
    props.onLogout(props.history);
}
const logout2=()=>{
  props.onLogout2(props.history);
}
const fun=async()=>{
  if(upraisal<props.upraisal.upraisal.length){
//alert("hi")
  const obj={
    id:props.eauth.emp.id,
    data:props.upraisal.upraisal.length
}
     const res1 = await props.onFetchnoti2(obj);
     if(res1){
       setupraisal(res1.upraisal);
      
     }
    }
}

const fun2=async()=>{
  if(timesheet<props.timesheet.timesheet.length){
    //alert("hi")
  const obj={
    id:props.eauth.emp.id,
    data:props.timesheet.timesheet.length
}
     const res1 = await props.onFetchnoti3(obj);
     if(res1){
      settimesheet(res1.timesheet);
      console.log(res1);

     }
    }
}

const fun3=async()=>{
  if(salary<props.salary.salary.length){
    //alert("hi");
  const obj={
    id:props.eauth.emp.id,
    data:props.salary.salary.length
}
     const res1 = await props.onFetchnoti4(obj);
     if(res1){
      setsalary(res1.salary);

     }
    }
}

const fun4=async()=>{
  if(project<props.project.project.length){
//alert("hi")
  const obj={
    id:props.eauth.emp.id,
    data:props.project.project.length
    }
     const res1 = await props.onFetchnoti5(obj);
     if(res1){
      setproject(res1.project);

     }
    }
}
const fun5=async()=>{
  if(role<props.role.role.length){
//alert("hi")
  const obj={
    id:props.eauth.emp.id,
    data:props.role.role.length
}
     const res1 = await props.onFetchnoti6(obj);
     if(res1){
      setrole(res1.role);

     }
    }
}

useEffect(()=>{
 
    (async function anyNameFunction() {
     const res1 = await props.onFetchUpraisal3(props.eauth.emp.id);
     if(res1){
      const res2 = await props.onFetchTimesheet3(props.eauth.emp.id);
      if(res2){
        const res4 = await props.onFetchSalary3(props.eauth.emp.id);
        if(res4){
          const res5 = await props.onFetchProject();
          if(res5){
            const res6 = await props.onFetchRole();
            if(res6){
              const res3 = await props.onFetchnoti(props.eauth.emp.id);
                if(res3){
                  setupraisal(res3.upraisal);
                  settimesheet(res3.timesheet);
                  setsalary(res3.salary);
                  setproject(res3.project);
                  setrole(res3.role);
                }
         
            }
         }
       }
     }
  }
     


    })();
  
}, [])


  if(props.auth.isLoggedIn==true){
    return (<div className="wrapper">
      
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar mt-1" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search mt-0" />
        </button>
      </div>
    </div>
  </form>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-user" />
      </a>
      <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
        <a href="#" className="dropdown-item" onClick={logout}>
              <h6 className="dropdown-item-title">
                Logout
              </h6>
        </a>
        
        
        <div className="dropdown-divider" />
        <NavLink className="nav-link " to="/changeps" >Change Password </NavLink>
      </div>
    </li>
    {/* Notifications Dropdown Menu */}
    
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i className="fas fa-th-large" /></a>
    </li>
  </ul>
  
</nav>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">{props.auth.user.name}</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <NavItem className="nav-item">
            <NavLink className="nav-link" to="/dashboard" activeclassName="nav-link active"> 
            <i className="nav-icon fas fa-tachometer-alt text-warning" />
            <p>
            Dashboard    
              
            </p></NavLink>
            
          </NavItem>
        <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-department" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-id-card text-warning" />
            <p>
              DPT    
              
            </p></NavLink>
            
          </NavItem>
        
          <li className="nav-item has-treeview menu">
            <a href="#" className="nav-link" >
              <i className="nav-icon fas fa-copy text-danger"></i>
              <p>
              Reports
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
            <NavItem className="nav-item">
            <NavLink className="nav-link" to="/upraisalrep" activeclassName="nav-link active"> 
             <i className="far fa-circle nav-icon text-danger" />
            <p>
              Upraisal     
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/leaverep" activeclassName="nav-link active"> 
             <i className="far fa-circle nav-icon text-purple" />
            <p>
              Leave     
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/salaryrep" activeclassName="nav-link active"> 
             <i className="far fa-circle nav-icon text-info" />
            <p>
              Salary     
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/timesheetrep" activeclassName="nav-link active"> 
             <i className="far fa-circle nav-icon text-success" />
            <p>
              Timesheet     
              
            </p></NavLink>
            
          </NavItem>
            </ul>
          </li>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-employee" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-user text-warning" />
            <p>
              Employees     
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-upraisal" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-angle-double-up text-warning" />
            <p>
              Upraisal    
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-timesheet" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-check-square text-warning" />
            <p>
              Timeheet    
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-salary" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-credit-card text-warning" />
            <p>
              Salary     
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-leave" activeclassName="nav-link active">  
            <i className="nav-icon fas fa-anchor text-warning" />
            <p>
              Leave
             </p></NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-project" activeclassName="nav-link active">  
            <i className="nav-icon fas fa-tasks text-warning" />
            <p>
              Project
             </p></NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/view-role" activeclassName="nav-link active">  
            <i className="nav-icon fas fa-users text-warning" />
            <p>
              Role
             </p></NavLink>
          </NavItem>
          
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</div>
    
    );
  }
  else if(props.eauth.isLoggedIn==true){
    if(props.upraisal.datastate3=="NOT_INITIALIZED" || props.upraisal.datastate3=="FETCHING" || 
        props.noti.datastate21=="NOT_INITIALIZED" || props.noti.datastate21=="FETCHING" ||
        props.timesheet.datastate4=="NOT_INITIALIZED" || props.timesheet.datastate4=="FETCHING" ||
        props.salary.datastate5=="NOT_INITIALIZED" || props.salary.datastate5=="FETCHING" ||
        props.project.datastate7=="NOT_INITIALIZED" || props.project.datastate7=="FETCHING" ||
        props.role.datastate8=="NOT_INITIALIZED" || props.role.datastate8=="FETCHING" )
            {
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            );
       }
        else {
          
    return (
      <div className="wrapper">
      
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="index3.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar mt-1" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search mt-0" />
        </button>
      </div>
    </div>
  </form>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="far fa-user" />
      </a>
      <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
        <a href="#" className="dropdown-item" onClick={logout2}>
              <h6 className="dropdown-item-title">
                Logout
              </h6>
        </a>
        
        
        
      </div>
    </li>
    {/* Notifications Dropdown Menu */}
    
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i className="fas fa-th-large" /></a>
    </li>
  </ul>
  
</nav>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">{props.eauth.emp.name}</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <NavItem className="nav-item">
            <NavLink className="nav-link" to="/edetails" activeclassName="nav-link active"> 
            <i className="nav-icon fas fa-tachometer-alt text-warning" />
            <p>
            Details    
              
            </p></NavLink>
            
          </NavItem>
        <NavItem className="nav-item">
            <NavLink onClick={fun} className="nav-link" to="/eupraisal" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-id-card text-warning" />
            <p>
              Upraisal    
              {upraisal<props.upraisal.upraisal.length?<span class="right badge badge-danger">New</span>:null}

            </p></NavLink>
            
          </NavItem>
        
          <NavItem className="nav-item">
            <NavLink onClick={fun3} className="nav-link" to="/esalary" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-user text-warning" />
            <p>
              Salary     
              {props.salary.salary.length>salary?<span class="right badge badge-danger">New</span>:null}
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink onClick={fun2} className="nav-link" to="/etimesheet" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-angle-double-up text-warning" />
            <p>
              Timesheet    
              {props.timesheet.timesheet.length>timesheet?<span class="right badge badge-danger">New</span>:null}
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" to="/eleave" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-check-square text-warning" />
            <p>
              Leave    
              
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink onClick={fun4} className="nav-link" to="/eproject" activeclassName="nav-link active"> 
             <i className="nav-icon fas fa-credit-card text-warning" />
            <p>
              Project     
              {props.project.project.length>project?<span class="right badge badge-danger">New</span>:null}
            </p></NavLink>
            
          </NavItem>
          <NavItem className="nav-item">
            <NavLink onClick={fun5} className="nav-link" to="/erole" activeclassName="nav-link active">  
            <i className="nav-icon fas fa-anchor text-warning" />
            <p>
              Role
              {props.role.role.length>role?<span class="right badge badge-danger">New</span>:null}
             </p></NavLink>
          </NavItem>
          
          
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</div>
    )};
  }
  
}

const mapStateToProps=state=>({
  auth:state.auth,
  eauth:state.eauth,
  upraisal:state.upraisal,
  noti:state.noti,
  timesheet:state.timesheet,
  salary:state.salary,
  role:state.role,
  project:state.project
})

export default connect(mapStateToProps,{onLogout,onLogout2,onFetchnoti,onFetchnoti2,onFetchUpraisal3,onFetchTimesheet3,
                    onFetchnoti3,onFetchnoti4,onFetchSalary3,onFetchProject,onFetchRole,onFetchnoti5,onFetchnoti6})(withRouter(Navbar));