import axios from 'axios';
import { Route, Redirect } from 'react-router'

export const onAddProject=(data,history)=>{

return(dispatch)=>{
    axios.post("http://localhost:5000/saveProject", data)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-project");

        }
        else{
            dispatch(onAddFailure(res.msg));
        }
    }).catch(err=>{
        //console.log(err);
        dispatch(onAddFailure(err.response.msg));
    })
}
}

export const onFetchProject=()=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get("http://localhost:5000/viewProject/")
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

export const onDeleteProject=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return  axios.post("http://localhost:5000/deleteProject/"+id)
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

export const getSingleProject=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editProject/"+id)
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

export const onUpdateProject=(data,history)=>{
    
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateProject",data,history)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
           
            history.push("/view-project");
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            //console.log(err);
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
        type:"ADD_SUCCESS7",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE7",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS7",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE7",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING7"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS7",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE7",
        payload:msg
    }
}

export const ondis=()=>{
    return {
        type:"DISSPP",
    }
}
