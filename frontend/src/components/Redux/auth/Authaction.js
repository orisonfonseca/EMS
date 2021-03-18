import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utilities/setAuthToken';


export const onRegister=(user)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/register",user)
        .then(res=>{
            if(res.status==200){
                dispatch(onRegisterSuccess(res.data.msg));
            }else{
                dispatch(onRegisterFailure(res.data.msg)); 
               }
        }).catch(err=>{
            dispatch(onRegisterFailure(err.response.data.msg));
        })
    }
}

export const onLogin=(user,history)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/login",user)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                const {token}=res.data;
                //console.log(token);
               const decoded=jwtDecode(token);
                //console.log(decoded);
                //localStorage.setItem("user",token);
                localStorage.setItem('user',token)
               setAuthToken(token);
               dispatch(onLoginSuccess(decoded));
               history.push('/view-employee');
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
export const onChangePass=(data)=>{
    return (dispatch)=>{
       return axios.post("http://localhost:5000/changepassword",data)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                
               dispatch(onChangeSuccess(res.data.msg));
               return true
            }
            else{ 
                dispatch(onChangeFailure(res.data.msg));
                console.log(res.data.msg);
            }
        })
        .catch(err=>{
            //console.log(err.response.data.msg);
            dispatch(onChangeFailure(err.response.data.msg));
        })
    }
}

export const onForgotPass=(data)=>{
    return (dispatch)=>{
       return axios.post("http://localhost:5000/forgot",data)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                
               dispatch(onChangeSuccess(res.data.msg));
               return true
            }
            else{ 
                dispatch(onChangeFailure(res.data.msg));
                console.log(res.data.msg);
            }
        })
        .catch(err=>{
            dispatch(onChangeFailure(err.response.data.msg));
        })
    }
}

export const onResetPass=(data)=>{
    console.log("hi");
    return (dispatch)=>{
       return axios.patch("http://localhost:5000/reset",data)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                
               //dispatch(onChangeSuccess(res.data.msg));
               return true
            }
            else{ 
                //dispatch(onChangeFailure(res.data.msg));
                console.log(res.data.msg);
            }
        })
        .catch(err=>{
            dispatch(onChangeFailure(err.response.data.msg));
        })
    }
}

export const OnDissappear=()=>{
 
    return (dispatch)=>{
        setTimeout(function(){
            dispatch(ondis());
        }, 4000);
            
}
}

export const onLogout=(history)=>{
    return (dispatch)=>{
        localStorage.removeItem("user");
        setAuthToken();
        dispatch(onLogoutSuccess());
        history.push('/');
    }
}

export const onRegisterSuccess=(msg)=>{
    return {
        type:"ON_REGISTER_SUCCESS",
        payload:msg
    }
}
export const onRegisterFailure=(msg)=>{
    return {
        type:"ON_REGISTER_FAILURE",
        payload:msg
    }
}
export const onLoginSuccess=(user)=>{
    return {
        type:"ON_LOGIN_SUCCESS",
        payload:user,
    }
}

export const onLoginFailure=(msg)=>{
    return {
        type:"ON_LOGIN_FAILURE",
        payload:msg,
    }
}

export const onLogoutSuccess=()=>{
    return {
        type:"ON_LOGOUT_SUCCESS",
    }
}
export const onChangeSuccess=(msg)=>{
    return {
        type:"ON_CHANGE_SUCCESS",
        payload:msg,
    }
}
export const onChangeFailure=(msg1)=>{
    return {
        type:"ON_CHANGE_FAILURE",
        payload:msg1,
    }
}

export const ondis=()=>{
    return {
        type:"DISSP",
    }
}