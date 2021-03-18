import {combineReducers} from 'redux';
import authReducer from './Redux/auth/Authreducer';
import employeeReducer from './Redux/employee/Employeereducer';
import upraisalReducer from './Redux/upraisal/Upraisalreducer';
import timesheetReducer from './Redux/timesheet/Timesheetreducer';
import salaryReducer from './Redux/salary/Salaryreducer';
import leaveReducer from './Redux/leave/Leavereducer';
import projectReducer from './Redux/project/Projectreducer';
import roleReducer from './Redux/role/Rolereducer';
import departmentReducer from './Redux/department/Departmentreducer';
import eauthReducer from './Redux/eauth/Eauthreducer';
import notiReducer from './Redux/noti/Notireducer';

export default combineReducers({   
     auth:authReducer,
     employees:employeeReducer,
     upraisal:upraisalReducer,
     timesheet:timesheetReducer,
     salary:salaryReducer,
     leave:leaveReducer,
     project:projectReducer,
     role:roleReducer,
     department:departmentReducer,
     eauth:eauthReducer,
     noti:notiReducer
});