import axios from 'axios';

export const onFetchnoti=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get("http://localhost:5000/noti/"+id)
        .then(res=>{
            if(res.status==200){
                
                dispatch(onFetchSuccess(res.data));
                return res.data
            }else{
                dispatch(onFetchFailure2(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure2(err))
        })
    }
}

export const onFetchnoti2=(obj)=>{
    return (dispatch)=>{
        //dispatch(onFetching());
        //console.log(obj);
       return axios.post("http://localhost:5000/noti2",obj)
        .then(res=>{
            if(res.status==200){
                
                dispatch(onUpdateSuccess(res.data));
                return res.data
                
            }else{
                dispatch(onUpdateFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err))
        })
    }
}

export const onFetchnoti3=(obj)=>{
    return (dispatch)=>{
        //dispatch(onFetching());
        //console.log(obj);
       return axios.post("http://localhost:5000/noti3",obj)
        .then(res=>{
            if(res.status==200){
                
                dispatch(onUpdateSuccess(res.data));
                return res.data
                
            }else{
                dispatch(onUpdateFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err))
        })
    }
}

export const onFetchnoti4=(obj)=>{
    return (dispatch)=>{
        //dispatch(onFetching());
        //console.log(obj);
       return axios.post("http://localhost:5000/noti4",obj)
        .then(res=>{
            if(res.status==200){
                
                dispatch(onUpdateSuccess(res.data));
                return res.data
                
            }else{
                dispatch(onUpdateFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err))
        })
    }
}

export const onFetchnoti5=(obj)=>{
    return (dispatch)=>{
        //dispatch(onFetching());
        //console.log(obj);
       return axios.post("http://localhost:5000/noti5",obj)
        .then(res=>{
            if(res.status==200){
                
                dispatch(onUpdateSuccess(res.data));
                return res.data
                
            }else{
                dispatch(onUpdateFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err))
        })
    }
}

export const onFetchnoti6=(obj)=>{
    return (dispatch)=>{
        //dispatch(onFetching());
        //console.log(obj);
       return axios.post("http://localhost:5000/noti6",obj)
        .then(res=>{
            if(res.status==200){
                
                dispatch(onUpdateSuccess(res.data));
                return res.data
                
            }else{
                dispatch(onUpdateFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err))
        })
    }
}

export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS21",
        payload:res1
    }
}
export const onFetchFailure2=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE21",
        payload:msg,
    }
}

export const onFetching=()=>{
    return{
        type:"ON_FETCHING21"
    }
}
export const onUpdateSuccess=(msg)=>{
   
    return {
        type:"UPDATE_SUCCESS21",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE21",
        payload:msg
    }
}