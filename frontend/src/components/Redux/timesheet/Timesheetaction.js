import axios from 'axios';

export const onAddTimesheet=(data,history)=>{

return(dispatch)=>{
    axios.post("http://localhost:5000/saveTimesheet", data)
    .then(res=>{
        if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            history.push("/view-timesheet");

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

export const onFetchTimesheet=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewTimesheet/"+id)
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

export const onFetchTimesheet2=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewTimesheetrep")
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

export const onFetchTimesheet3=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get("http://localhost:5000/viewTimesheet2/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                return res.data;
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onDeleteTimesheet=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return  axios.get("http://localhost:5000/deleteTimesheet/"+id)
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

export const getSingleTimesheet=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editTimesheet/"+id)
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

export const onUpdateTimesheet=(data,trek,history)=>{
   
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateTimesheet",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
           // <Redirect to={`view-particular/${trek}`}/>
            history.push("/view-particulartimesheet/"+trek);
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
export const onUpdateTimesheet2=(data,trek,history)=>{
  
    return (dispatch)=>{
       return axios.post("http://localhost:5000/updateTimesheet",data)
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

export const OnDissappear=()=>{
 
    return (dispatch)=>{
        setTimeout(function(){
            dispatch(ondis());
        }, 4000);
            
}
}
export const onAddSuccess=(msg)=>{
    return {
        type:"ADD_SUCCESS4",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE4",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS4",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE4",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING4"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS4",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE4",
        payload:msg
    }
}

export const ondis=()=>{
    return {
        type:"DISST",
    }
}