import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utilities/setAuthToken';



export const onLogin=(user,history)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/Employeelogin",user)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                const {token}=res.data;
               const decoded=jwtDecode(token);
                localStorage.setItem('emp',token)
               //setAuthToken(token);
               dispatch(onLoginSuccess2(decoded));
               history.push('/edetails');
            }
            else{ 
                dispatch(onLoginFailure(res.data.msg));
            }
        })
        .catch(err=>{
            console.log(err.response.data.msg);
            dispatch(onLoginFailure(err.response.data.msg));
        })
    }
}


export const onLogout2=(history)=>{
    return (dispatch)=>{
        localStorage.removeItem("emp");
        dispatch(onLogoutSuccess());
        history.push('/elogin');
    }
}

export const onRegisterSuccess=(msg)=>{
    return {
        type:"ON_REGISTER_SUCCESS2",
        payload:msg
    }
}
export const onRegisterFailure=(msg)=>{
    return {
        type:"ON_REGISTER_FAILURE2",
        payload:msg
    }
}
export const onLoginSuccess2=(user)=>{
    return {
        type:"ON_LOGIN_SUCCESS2",
        payload:user,
    }
}

export const onLoginFailure=(msg)=>{
    return {
        type:"ON_LOGIN_FAILURE2",
        payload:msg,
    }
}

export const onLogoutSuccess=()=>{
    return {
        type:"ON_LOGOUT_SUCCESS2",
    }
}
export const onChangeSuccess=(msg)=>{
    return {
        type:"ON_CHANGE_SUCCESS2",
        payload:msg,
    }
}
export const onChangeFailure=(msg1)=>{
    return {
        type:"ON_CHANGE_FAILURE2",
        payload:msg1,
    }
}