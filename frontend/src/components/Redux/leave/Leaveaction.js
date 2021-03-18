import axios from 'axios';
import { Route, Redirect } from 'react-router'

export const onAddLeave=(data,history)=>{

return(dispatch)=>{
    axios.post("http://localhost:5000/saveLeave", data)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-Leave");

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

export const onAddLeave2=(data,history)=>{

    return(dispatch)=>{
        axios.post("http://localhost:5000/saveLeave", data)
        .then(res=>{
            if(res.status==200){
                dispatch(onAddSuccess(res.data.msg));
                history.push("/eleave");
            }
            else{
                dispatch(onAddFailure(res.msg));
            }
        }).catch(err=>{
            dispatch(onAddFailure(err.response.msg));
        })
    }
    }

export const onFetchLeave=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewLeave/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onFetchLeave2=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewLeaverep")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onFetchLeave23=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewLeaverep2")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onFetchLeave3=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewLeave2/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onDeleteLeave=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return  axios.get("http://localhost:5000/deleteLeave/"+id)
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

export const getSingleLeave=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editLeave/"+id)
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

export const onUpdateLeave=(data,trek,history)=>{
 
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateLeave",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
           // <Redirect to={`view-particular/${trek}`}/>
            history.push("/view-partleave/"+trek);
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

export const onUpdateLeave2=(data,trek,history)=>{
  
    return (dispatch)=>{
       return axios.post("http://localhost:5000/updateLeave",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
                    return true
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            
            dispatch(onUpdateFailure(err.response.msg));
        })
}
}

export const onUpdateLeave3=(data,history)=>{
 
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateLeave",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
            history.push("/eleave");
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
        type:"ADD_SUCCESS6",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE6",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS6",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE6",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING6"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS6",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE6",
        payload:msg
    }
}
export const ondis=()=>{
    return {
        type:"DISS",
    }
}

