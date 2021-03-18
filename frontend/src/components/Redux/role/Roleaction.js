import axios from 'axios';
import { Route, Redirect } from 'react-router'

export const onAddRole=(data,history)=>{

return(dispatch)=>{
    axios.post("http://localhost:5000/saveRole", data)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-role");

        }
        else{
            dispatch(onAddFailure(res.msg));
        }
    }).catch(err=>{
        dispatch(onAddFailure(err.response.msg));
    })
}
}

export const onFetchRole=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get("http://localhost:5000/viewRole")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                return res.data
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onDeleteRole=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return  axios.get("http://localhost:5000/deleteRole/"+id)
        .then(res=>{
            if(res.status==200){
                return true;
            }else{
                return false;
            }
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const getSingleRole=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editRole/"+id)
        .then(res=>{
            //console.log(res);
            return res.data;
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const onUpdateRole=(data,history)=>{
    
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateRole",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
            history.push("/view-role");
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err.response.msg));
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
export const onAddSuccess=(msg)=>{
    return {
        type:"ADD_SUCCESS8",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE8",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS8",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE8",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING8"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS8",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE8",
        payload:msg
    }
}

export const ondis=()=>{
    return {
        type:"DISSR",
    }
}
