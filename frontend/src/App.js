import logo from './logo.svg';
import './App.css';
import Navbar from './components/script/dashboard/Navbar';
import { BrowserRouter as Router, Switch, Route,withRouter } from 'react-router-dom';
import Register from './components/script/Register';
import PrivateRoute from './components/reusable/PrivateRoute';
import PublicRoute from './components/reusable/PublicRoute';
import PrivateRoute2 from './components/reusable/PrivateRoute2';
import PublicRoute2 from './components/reusable/PublicRoute2';
import store from './store';
import {Provider} from 'react-redux';
import Dashboard from './components/script/dashboard/Dashboard';
import Login from './components/script/Login';
import setAuthToken from './components/utilities/setAuthToken';
import {onLoginSuccess} from './components/Redux/auth/Authaction';
import {onLoginSuccess2} from './components/Redux/eauth/Eauthaction';
import jwdDecode from "jwt-decode";
import Addemployee from './components/script/employee/Addemployee';
import Viewemployee from './components/script/employee/Viewemployee';
import Editemployee from './components/script/employee/Editemployee';
import Viewupraisal from './components/script/upraisal/Viewupraisal';
import Addupraisal from './components/script/upraisal/Addupraisal';
import Particularupraisal from './components/script/upraisal/Particularupraisal';
import Editupraisal from './components/script/upraisal/Editupraisal';
import Viewtimesheet from './components/script/timesheet/Viewtimesheet';
import Addtimesheet from './components/script/timesheet/Addtimesheet';
import Viewparticulartime from './components/script/timesheet/Viewparticulartime';
import Edittimesheet from './components/script/timesheet/Edittimesheet';
import Viewsalary from './components/script/salary/Viewsalary';
import Addsalary from './components/script/salary/Addsalary';
import Viewparticularsalary from './components/script/salary/Viewparticularsalary';
import Editsalary from './components/script/salary/Editsalary';
import Viewleave from './components/script/leave/Viewleave';
import Addleave from './components/script/leave/Addleave';
import Viewpartleave from './components/script/leave/Viewpartleave';
import Editleave from './components/script/leave/Editleave';
import Viewproject from './components/script/project/Viewproject';
import Addproject from './components/script/project/Addproject';
import Viewpartproject from './components/script/project/Viewpartproject';
import Editproject from './components/script/project/Editproject';
import Viewrole from './components/script/role/Viewrole';
import Addrole from './components/script/role/Addrole';
import Viewpartrole from './components/script/role/Viewpartrole';
import Editrole from './components/script/role/Editrole';
import Viewdepartment from './components/script/department/Viewdepartment';
import Adddepartment from './components/script/department/Adddepartment';
import Mainrep from './components/script/reports/Mainrep';
import Changeps from './components/script/dashboard/Changeps';
import Elogin from './components/script/Elogin';
import Edetails from './components/script/edata/Edetails';
import Eupraisal from './components/script/edata/Eupraisal';
import Esalary from './components/script/edata/Esalary';
import Etimesheet from './components/script/edata/Etimesheet';
import Eleave from './components/script/edata/Eleave';
import Addleave2 from './components/script/edata/Addleave2';
import Editleave2 from './components/script/edata/Editleave2';
import Eproject from './components/script/edata/Eproject';
import Erole from './components/script/edata/Erole';
import Forgot from './components/script/Forgot';
import Reset from './components/script/Reset';
import Root from './Root';
import Upraisalrep from './components/script/reports/Upraisalrep';
import Dashboard22 from './components/script/dashboard/Dashboard22';
import Nom from './components/script/dashboard/Nom';
import Leaverep from './components/script/reports/Leaverep';
import Salaryrep from './components/script/reports/Salaryrep';
import Timesheetrep from './components/script/reports/Timesheetrep';


function App() {
  
  const token = localStorage.getItem("user");
  const token2 = localStorage.getItem("emp");
 
  if(token){
    setAuthToken(token);  
    const decoded=jwdDecode(token);
    console.log(decoded);
   store.dispatch(onLoginSuccess(decoded));
  }else if(token2){
    //setAuthToken(token);  
    const decoded=jwdDecode(token2);
    console.log(decoded);
   store.dispatch(onLoginSuccess2(decoded));
  }

  const Main=withRouter(({location})=>{
    console.log(store.getState().auth);
    if(store.getState().auth.isLoggedIn==false && store.getState().eauth.isLoggedIn==false){
      return (
        <div>
            {location.pathname!="/" && location.pathname!="/register"  && location.pathname!="/elogin" && location.pathname!="/forgot"
             && location.pathname=="/reset/:id" && <Navbar/> } 
             
    
            <Switch>  
            <PublicRoute exact path="/register" component={Register}/>
            <PrivateRoute exact path="/add-employee" component={Addemployee}/>
            <PrivateRoute exact path="/view-employee" component={Viewemployee}/>
            <PublicRoute exact path="/" component={Login}/>
            <PrivateRoute exact path="/edit-employee/:id" component={Editemployee}/>
            <PrivateRoute exact path="/view-upraisal" component={Viewupraisal}/>
            <PrivateRoute exact path="/add-upraisal/:id" component={Addupraisal}/>
            <PrivateRoute exact path="/view-particular/:id" component={Particularupraisal}/>
            <PrivateRoute exact path="/view-particular/edit-upraisal/:id" component={Editupraisal}/>
            <PrivateRoute exact path="/view-timesheet" component={Viewtimesheet}/>
            <PrivateRoute exact path="/add-timesheet/:id" component={Addtimesheet}/>
            <PrivateRoute exact path="/view-particulartimesheet/:id" component={Viewparticulartime}/>
            <PrivateRoute exact path="/view-particulartimesheet/edit-timesheet/:id" component={Edittimesheet}/>
            <PrivateRoute exact path="/view-salary" component={Viewsalary}/>
            <PrivateRoute exact path="/add-salary/:id" component={Addsalary}/>
            <PrivateRoute exact path="/view-partsalary/:id" component={Viewparticularsalary}/>
            <PrivateRoute exact path="/view-partsalary/edit-salary/:id" component={Editsalary}/>
            <PrivateRoute exact path="/view-leave" component={Viewleave}/>
            <PrivateRoute exact path="/add-leave/:id" component={Addleave}/>
            <PrivateRoute exact path="/view-partleave/:id" component={Viewpartleave}/>
            <PrivateRoute exact path="/view-partleave/edit-leave/:id" component={Editleave}/>
            <PrivateRoute exact path="/view-project" component={Viewproject}/>
            <PrivateRoute exact path="/add-project" component={Addproject}/>
            <PrivateRoute exact path="/view-partproject/:id" component={Viewpartproject}/>
            <PrivateRoute exact path="/edit-project/:id" component={Editproject}/>
            <PrivateRoute exact path="/view-role" component={Viewrole}/>
            <PrivateRoute exact path="/add-role" component={Addrole}/>
            <PrivateRoute exact path="/view-partrole/:id" component={Viewpartrole}/>
            <PrivateRoute exact path="/edit-role/:id" component={Editrole}/>
            <PrivateRoute exact path="/view-department" component={Viewdepartment}/>
            <PrivateRoute exact path="/add-department" component={Adddepartment}/>
            <PrivateRoute exact path="/mainrep" component={Mainrep}/>
            <PrivateRoute exact path="/changeps" component={Changeps}/>
            <PrivateRoute exact path="/upraisalrep" component={Upraisalrep}/>
            <PrivateRoute exact path="/dashboard22" component={Dashboard22}/>
            <PrivateRoute exact path="/nom" component={Nom} />
            <PublicRoute2 exact path="/elogin" component={Elogin}/>
            <PrivateRoute2 exact path="/edetails" component={Edetails}/>
            <PrivateRoute2 exact path="/eupraisal" component={Eupraisal}/>
            <PrivateRoute2 exact path="/esalary" component={Esalary}/>
            <PrivateRoute2 exact path="/etimesheet" component={Etimesheet}/>
            <PrivateRoute2 exact path="/eleave" component={Eleave}/>
            <PrivateRoute2 exact path="/add-leave2/:id" component={Addleave2}/>
            <PrivateRoute2 exact path="/edit-leave2/:id" component={Editleave2}/>
            <PrivateRoute2 exact path="/eproject" component={Eproject}/>
            <PrivateRoute2 exact path="/erole" component={Erole}/>
            <PublicRoute exact path="/forgot" component={Forgot}/>
            <PublicRoute exact path="/reset/:id" component={Reset}/>
    
            </Switch>
          
        </div>
      );
    
    }else{
      return (
        <div>
            {location.pathname!="/" && location.pathname!="/register"  && location.pathname!="/elogin" && location.pathname!="/forgot"
               && <Navbar/> } 
             
    
            <Switch>  
            <PublicRoute exact path="/register" component={Register}/>
            <PrivateRoute exact path="/add-employee" component={Addemployee}/>
            <PrivateRoute exact path="/view-employee" component={Viewemployee}/>
            <PublicRoute exact path="/" component={Login}/>
            <PrivateRoute exact path="/edit-employee/:id" component={Editemployee}/>
            <PrivateRoute exact path="/view-upraisal" component={Viewupraisal}/>
            <PrivateRoute exact path="/add-upraisal/:id" component={Addupraisal}/>
            <PrivateRoute exact path="/view-particular/:id" component={Particularupraisal}/>
            <PrivateRoute exact path="/view-particular/edit-upraisal/:id" component={Editupraisal}/>
            <PrivateRoute exact path="/view-timesheet" component={Viewtimesheet}/>
            <PrivateRoute exact path="/add-timesheet/:id" component={Addtimesheet}/>
            <PrivateRoute exact path="/view-particulartimesheet/:id" component={Viewparticulartime}/>
            <PrivateRoute exact path="/view-particulartimesheet/edit-timesheet/:id" component={Edittimesheet}/>
            <PrivateRoute exact path="/view-salary" component={Viewsalary}/>
            <PrivateRoute exact path="/add-salary/:id" component={Addsalary}/>
            <PrivateRoute exact path="/view-partsalary/:id" component={Viewparticularsalary}/>
            <PrivateRoute exact path="/view-partsalary/edit-salary/:id" component={Editsalary}/>
            <PrivateRoute exact path="/view-leave" component={Viewleave}/>
            <PrivateRoute exact path="/add-leave/:id" component={Addleave}/>
            <PrivateRoute exact path="/view-partleave/:id" component={Viewpartleave}/>
            <PrivateRoute exact path="/view-partleave/edit-leave/:id" component={Editleave}/>
            <PrivateRoute exact path="/view-project" component={Viewproject}/>
            <PrivateRoute exact path="/add-project" component={Addproject}/>
            <PrivateRoute exact path="/view-partproject/:id" component={Viewpartproject}/>
            <PrivateRoute exact path="/edit-project/:id" component={Editproject}/>
            <PrivateRoute exact path="/view-role" component={Viewrole}/>
            <PrivateRoute exact path="/add-role" component={Addrole}/>
            <PrivateRoute exact path="/view-partrole/:id" component={Viewpartrole}/>
            <PrivateRoute exact path="/edit-role/:id" component={Editrole}/>
            <PrivateRoute exact path="/view-department" component={Viewdepartment}/>
            <PrivateRoute exact path="/add-department" component={Adddepartment}/>
            <PrivateRoute exact path="/mainrep" component={Mainrep}/>
            <PrivateRoute exact path="/changeps" component={Changeps}/>
            <PublicRoute2 exact path="/elogin" component={Elogin}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute2 exact path="/edetails" component={Edetails}/>
            <PrivateRoute2 exact path="/eupraisal" component={Eupraisal}/>
            <PrivateRoute2 exact path="/esalary" component={Esalary}/>
            <PrivateRoute2 exact path="/etimesheet" component={Etimesheet}/>
            <PrivateRoute2 exact path="/eleave" component={Eleave}/>
            <PrivateRoute2 exact path="/add-leave2/:id" component={Addleave2}/>
            <PrivateRoute2 exact path="/edit-leave2/:id" component={Editleave2}/>
            <PrivateRoute2 exact path="/eproject" component={Eproject}/>
            <PrivateRoute2 exact path="/erole" component={Erole}/>
            <PublicRoute exact path="/forgot" component={Forgot}/>
            <PublicRoute exact path="/reset/:id" component={Reset}/>
            <PrivateRoute exact path="/upraisalrep" component={Upraisalrep}/>
            <PrivateRoute exact path="/leaverep" component={Leaverep}/>
            <PrivateRoute exact path="/salaryrep" component={Salaryrep}/>
            <PrivateRoute exact path="/timesheetrep" component={Timesheetrep}/>


            </Switch>
          
        </div>
      );
    }
  
  
  
  })
  return (
    <Provider store={store}>
    <Router>
      <Main></Main>
    </Router>
    </Provider>
  );
}

export default App;

